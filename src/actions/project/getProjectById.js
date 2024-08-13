"use server"
import prisma from "@/lib/prisma";

export async function getProjectById(id) {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        FunctionalRequirement: {
          orderBy: {
            createdAt: "asc"
          },
          include: {
            Requirement: {
              orderBy: {
                createdAt: "asc"
              }
            }
          }
        },
        UserStory: {
          include: {
            Task: {
              orderBy: {
                createdAt: "asc"
              }
            }
          },
          orderBy: {
            due: "asc"
          }
        },
        TechStack: {
          orderBy: {
            createdAt: "asc"
          }
        },
        Task: {
          orderBy: {
            createdAt: "asc"
          },
          include: {
            userStory: {
              select: {
                title: true,
                description: true
              }
            },
          }
        }
      }
    })

    return {
      ok: true,
      project
    }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: "Error obtaining the project from the database"
    }
  }
}