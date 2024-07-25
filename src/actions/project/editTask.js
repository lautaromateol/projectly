"use server";
import { auth } from "@/lib/auth.config";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function editTask(projectId, taskId, task) {
  try {
    const session = await auth()

    const isAuthenticated = !!session?.user

    if (!isAuthenticated) {
      return {
        ok: false,
        message: "You must be authenticated to create an user story"
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

    await prisma.task.update({
      where: { id: taskId },
      data: task
    })

    revalidatePath(`/project/${projectId}`)

    return { ok: true }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: "Error adding the user story"
    }
  }
}