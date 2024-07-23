"use server";
import { auth } from "@/lib/auth.config";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function editProject(project, projectId) {
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
        message: "You are trying to update a project of another user"
      }
    }

    await prisma.project.update({
      where: { id: projectId },
      data: project
    })

    revalidatePath("/projects")

    return { ok: true }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: "Error updating the project"
    }
  }
}