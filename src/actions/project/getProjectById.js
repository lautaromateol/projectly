"use server"

import { prisma } from "@/lib/prisma"

export async function getProjectById(id) {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {    
        Task: true,
        FunctionalRequirement: true,
        UserStory: true,
        TechStack: true
      }
    })

    return {
      ok: true,
      project
    }
  } catch (error) {
    return {
      ok: false,
      message: "Error obtaining the project from the database"
    }
  }
}