"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input, Label } from "@/components/ui/forms"
import { register as registerAction } from "@/actions"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function RegisterForm() {

  const { handleSubmit, register } = useForm()

  const [errorMsg, setErrorMsg] = useState("")

  const [pending, setPending] = useState(false)

  const router = useRouter()

  async function onSubmit(data) {
    setPending(true)
    const response = await registerAction(data)

    if (!response.ok) {
      setErrorMsg(response.message)
      setPending(false)
      return
    }

    router.push("/auth/login")
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Sign up</CardTitle>
        <CardDescription>Enter your name, email and password to create your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input {...register("name", { required: true })} id="name" type="text" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input {...register("email", { required: true })} id="email" type="email" placeholder="john@doe.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input {...register("password", { required: true })} id="password" type="password" />
            <p className="text-sm text-red-500">{errorMsg}</p>
          </div>
          <Button disabled={pending} type="submit" className="w-full">
            Sign up
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          You already have an account?{" "}
          <Link href="/auth/register" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
