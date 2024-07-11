import { auth } from "@/lib/auth.config"
import { prisma } from "@/lib/prisma"
import { seed } from "@/lib/seed"
import { NextResponse } from "next/server"

export async function GET() {
  try {

    const session = await auth()

    const isAuthenticated = !!session?.user

    if (!isAuthenticated) return NextResponse.json({
      ok: false,
      message: "You must be authenticated to execute the seed."
    })

    const userId = session?.user?.id

    await prisma.task.deleteMany()
    await prisma.userStory.deleteMany()
    await prisma.functionalRequirement.deleteMany()
    await prisma.techStack.deleteMany()
    await prisma.project.deleteMany()

    const projectsPromises = seed.map((project, i) => {
      return prisma.project.create({
        data: {
          ...project,
          startDate: new Date(project.startDate),
          dueDate: new Date(project.dueDate),
          status: project.status === "Complete" ? "Complete" : "InProgress",
          userId,
          UserStory: {
            createMany: {
              data: [
                {
                  title: "As a user, I can sign up for an account",
                  description: "Users should be able to create an account to access the application.",
                  status: "InProgress"
                },{
                  title: "As a user, I can create a new project",
                  description: "Users should be able to create a new project to manage their tasks.",
                  status: "Pending"
                },
                {
                  title: "As a user, I can view my project dashboard",
                  description: "Users should be able to see an overview of their projects and tasks.",
                  status: "Complete"
                }
              ]
            }
          },
          Task: {
            createMany: {
              data: [
                {
                  title: `Project ${i + 1} - Task 1`,
                  description: "Description",
                  due: new Date("2024-05-15"),
                  status: "Done"
                },
                {
                  title: `Project ${i + 1} - Task 2`,
                  description: "Description",
                  due: new Date("2024-05-18"),
                  status: "Doing"
                },
                {
                  title: `Project ${i + 1} - Task 3`,
                  description: "Description",
                  due: new Date("2024-05-20"),
                  status: "ToDo"
                }
              ]
            }
          },
          FunctionalRequirement: {
            createMany: {
              data: [
                {
                  title: `User Authentication - Project ${i + 1}`,
                  description: "The application should allow users to sign up, log in, and manage their account information.",
                  requirements: [
                    "Email and password-based authentication",
                    "Social media authentication (Google, GitHub)",
                    "Password reset functionality"
                  ]
                },
                {
                  title: `Project Management - Project ${i + 1}`,
                  description: "The application should provide features to manage projects and tasks.",
                  requirements: [
                    "Create, update, and delete projects",
                    "Add, assign, and track tasks within projects",
                    "Kanban-style task board"
                  ]
                }
              ]
            },
          },
          TechStack: {
            createMany: {
              data: [
                {
                  type: "Frontend",
                  tools: [
                    "React",
                    "Tailwind CSS",
                    "React Router"
                  ]
                },
                {
                  type: "Backend",
                  tools: [
                    "NodeJS",
                    "Express",
                    "MongoDB"
                  ]
                }
              ]
            }
          }
        }
      })
    })

    const projects = await Promise.all(projectsPromises)

    return NextResponse.json({
      ok: true,
      message: "Seed executed successfully",
      projects
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      ok: false,
      message: "There was an error creating the seed"
    })
  }
}