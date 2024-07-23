"use server"
import { auth } from "@/lib/auth.config"
import prisma from "@/lib/prisma"

export async function getProjects() {

  const session = await auth()

  const isAuthenticated = !!session?.user

  if(!isAuthenticated) {
    return {
      ok: false,
      message: "You must be authenticated to get the projects"
    }
  }

  try {
   const projects = await prisma.project.findMany({
    where: { userId: session.user.id},
    orderBy: {
      createdAt: "desc"
    }
   }) 
   return {
    ok: true,
    projects
   }
  } catch (error) {
    return {
      ok: false, 
      message: "Error obtaining projects from database"
    }
  }
}