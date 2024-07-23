"use server";
import { auth } from "@/lib/auth.config";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function addProject(project) {
  try {
    const session = await auth()

    const isAuthenticated = !!session?.user

    if (!isAuthenticated) {
      return {
        ok: false,
        message: "You must be authenticated to create a project"
      }
    }

    await prisma.project.create({
      data: {
        ...project,
        userId: session.user.id
      }
    })

    revalidatePath("/projects")

    return { ok: true }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: "Error creating the project"
    }
  }
}