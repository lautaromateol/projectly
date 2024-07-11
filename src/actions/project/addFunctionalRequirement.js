"use server";
import { auth } from "@/lib/auth.config";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addFunctionalRequirement(projectId, requirement) {
  try {
    const session = await auth()

    const isAuthenticated = !!session?.user

    if (!isAuthenticated) {
      return {
        ok: false,
        message: "You must be authenticated to create a functional requirement"
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

    await prisma.functionalRequirement.create({
      data: {
        ...requirement,
        projectId
      }
    })

    revalidatePath(`/project/${projectId}`)

    return { ok: true }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: "Error adding the functional requirement"
    }
  }
}