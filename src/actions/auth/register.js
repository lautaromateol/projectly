"use server"
import { object, string } from "zod"
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"

const signInSchema = object({
  name: string({ required_error: "Name is required" })
    .min(1, "Name is required"),
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})


export async function register(credentials) {

  try {

    const { email, password, name } = await signInSchema.parseAsync(credentials)

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if(user) {
      return {
        ok: false,
        message: "This user is already registered"
      }
    }

    const dbUser = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, 10),
        name
      }
    })

    return { ok: true }
  } catch (error) {
    return {
      ok: false,
      message: error.errors[0].message
    }
  }
}