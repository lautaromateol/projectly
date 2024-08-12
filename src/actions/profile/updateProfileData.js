"use server"
import { auth } from "@/lib/auth.config"
import { revalidatePath } from "next/cache"
import prisma from "@/lib/prisma"

export async function updateProfileData(data) {
  const session = await auth()

  const isAuthenticated = !!session?.user

  if (!isAuthenticated) {
    return {
      ok: false,
      message: "You must be authenticated to update your profile"
    }
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data
  })

  revalidatePath("/profile")
}