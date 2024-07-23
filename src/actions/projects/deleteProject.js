"use server";
import { auth } from "@/lib/auth.config";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function deleteProject(projectId) {
  try {
    const session = await auth()

    const isAuthenticated = !!session?.user

    if (!isAuthenticated) {
      return {
        ok: false,
        message: "You must be authenticated to create a project"
      }
    }

    const projectDB = await prisma.project.findUnique({
      where: { id: projectId },
    })

    if (projectDB.userId !== session.user.id) {
      return {
        ok: false,
        message: "You are trying to delete a project of another user"
      }
    }

    await prisma.task.deleteMany({
      where: { projectId }
    })

    await prisma.userStory.deleteMany({
      where: { projectId }
    })

    await prisma.functionalRequirement.deleteMany({
      where: { projectId }
    })

    await prisma.techStack.deleteMany({
      where: { projectId }
    })

    await prisma.project.delete({
      where: { id: projectId },
    })

    revalidatePath("/projects")

    return { ok: true }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: "Error deleting the project"
    }
  }
}