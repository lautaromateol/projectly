"use server"

import { object, string } from "zod"
import { signIn } from "@/lib/auth.config"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"

const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})


export async function login(credentials) {

  try {

    const { email, password } = await signInSchema.parseAsync(credentials)

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return {
        ok: false,
        message: "This user is not registered"
      }
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return {
        ok: false,
        message: "Incorrect credentials"
      }
    }

    await signIn("credentials", { ...user, redirect: false })

    return { ok: true }

  } catch (error) {
    return {
      ok: false,
      message: error.errors[0].message
    }
  }
}