"use server"
import { auth } from "@/lib/auth.config"
import prisma from "@/lib/prisma"

export async function getAnalytics() {
  const session = await auth()

  const isAuthenticated = !!session?.user

  if (!isAuthenticated) {
    return {
      ok: false,
      message: "You must be authenticated to get the analytics"
    }
  }

  try {
    const [tasks, requirements, userStories, projects] = await Promise.all([
      prisma.task.findMany(),
      prisma.requirement.findMany(),
      prisma.userStory.findMany(),
      prisma.project.findMany({
        include: {
          Requirement: true,
          UserStory: true,
          Task: true
        },
        orderBy: {
          dueDate: "asc"
        }
      })
    ])

    return {
      ok: true,
      tasks, 
      requirements,
      userStories,
      projects
    }

  } catch (error) {
    console.log(error)
    return {
      ok: false,
      error
    }
  }
}

