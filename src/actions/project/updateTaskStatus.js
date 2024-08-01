"use server";
import { auth } from "@/lib/auth.config";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function updateTaskStatus(projectId, id, task) {
  try {
    const session = await auth()

    const isAuthenticated = !!session?.user

    if (!isAuthenticated) {
      return {
        ok: false,
        message: "You must be authenticated to update this task"
      }
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
    })

    if (project.userId !== session.user.id) {
      return {
        ok: false,
        message: "You are trying to update a project of another user"
      }
    }

    const taskToUpdate = await prisma.task.update({
      where: { id },
      data: task
    })

    const userStory = await prisma.userStory.findUnique({
      where: { id: taskToUpdate.userStoryId },
      include: {
        Task: {
          select: {
            status: true
          }
        }
      }
    })    

    const tasksLength = userStory.Task.length

    const completedTasksLength = userStory.Task.filter((task) => task.status === "Complete").length

    if(userStory.status === "Complete") {
      await prisma.userStory.update({
        where: { id: userStory.id },
        data: {
          status: "InProgress"
        }
      })
    }

    if(tasksLength === completedTasksLength) {
      await prisma.userStory.update({
        where: { id: userStory.id },
        data: {
          status: "Complete"
        }
      })
    }

    revalidatePath(`/project/${projectId}`)

    return { ok: true }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: "Error updating the task"
    }
  }
}