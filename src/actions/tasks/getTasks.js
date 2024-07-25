"use server";
import { auth } from "@/lib/auth.config";
import prisma from "@/lib/prisma";

export async function getTasks() {
  const session = await auth()

  const isAuthenticated = !!session?.user

  if (!isAuthenticated) {
    return {
      ok: false,
      message: "You must be authenticated to get the tasks"
    }
  }

  const tasks = await prisma.task.findMany({
    where: { userId: session.user.id },
    include: {
      userStory: {
        select: {
          title: true
        }
      },
      project: {
        select: {
          title: true
        }
      }
    }
  })

  return { ok: true, tasks }
}