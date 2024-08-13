// import { auth } from "@/lib/auth.config"
// import { seed } from "@/lib/seed"
// import { NextResponse } from "next/server"
// import prisma from "@/lib/prisma"

// export async function GET() {
//   try {

//     const session = await auth()

//     const isAuthenticated = !!session?.user

//     if (!isAuthenticated) return NextResponse.json({
//       ok: false,
//       message: "You must be authenticated to execute the seed."
//     })

//     const userId = session?.user?.id

//     await prisma.task.deleteMany()
//     await prisma.userStory.deleteMany()
//     await prisma.requirement.deleteMany()
//     await prisma.functionalRequirement.deleteMany()
//     await prisma.techStack.deleteMany()
//     await prisma.project.deleteMany()

//     const projectsPromises = seed.map((project, i) => {
//       return prisma.project.create({
//         data: {
//           ...project,
//           startDate: new Date(project.startDate),
//           dueDate: new Date(project.dueDate),
//           userId,
//           UserStory: {
//             createMany: {
//               data: [
//                 {
//                   title: "As a user, I can sign up for an account",
//                   description: "Users should be able to create an account to access the application.",
//                   status: "Pending",
//                   due: new Date(project.dueDate),
//                 }, {
//                   title: "As a user, I can create a new project",
//                   description: "Users should be able to create a new project to manage their tasks.",
//                   status: "Pending",
//                   due: new Date(project.dueDate),
//                 },
//                 {
//                   title: "As a user, I can view my project dashboard",
//                   description: "Users should be able to see an overview of their projects and tasks.",
//                   status: "Pending",
//                   due: new Date(project.dueDate),
//                 }
//               ]
//             }
//           },
//           FunctionalRequirement: {
//             createMany: {
//               data: [
//                 {
//                   title: `Project Management`,
//                   description: "The application should provide features to manage projects and tasks.",
//                 },
//               ]
//             },
//           },
//           TechStack: {
//             createMany: {
//               data: [
//                 {
//                   type: "Frontend",
//                   tools: [
//                     "React",
//                     "Tailwind CSS",
//                     "React Router"
//                   ]
//                 },
//                 {
//                   type: "Backend",
//                   tools: [
//                     "NodeJS",
//                     "Express",
//                     "MongoDB"
//                   ]
//                 }
//               ]
//             }
//           }
//         }
//       })
//     })

//     const projects = await Promise.all(projectsPromises)

//     const dbRequirements = await prisma.functionalRequirement.findMany()

//     const reqPromises = dbRequirements.map((req) => {
//       return prisma.requirement.createMany({
//         data: [
//           { description: "Create, update, and delete projects", functionalRequirementId: req.id, status: "Incomplete", projectId: req.projectId },
//           { description: "Add, assign, and track tasks within projects", functionalRequirementId: req.id, status: "Incomplete", projectId: req.projectId },
//           { description: "Kanban-style task board", functionalRequirementId: req.id, status: "Incomplete", projectId: req.projectId }
//         ]
//       })
//     })

//     await Promise.all(reqPromises)

//     return NextResponse.json({
//       ok: true,
//       message: "Seed executed successfully",
//       projects
//     })
//   } catch (error) {
//     console.log(error)
//     return NextResponse.json({
//       ok: false,
//       message: "There was an error creating the seed"
//     })
//   }
// }