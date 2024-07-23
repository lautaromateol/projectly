"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label, Input } from "@/components/ui/forms"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { login } from "@/actions"
import Link from "next/link"

export function LoginForm() {

  const { handleSubmit, register} = useForm()

  const [errorMsg, setErrorMsg] = useState("")

  const [pending, setPending] = useState(false)

  const router = useRouter()

  async function onSubmit(data) {
    setPending(true)
    const response = await login(data)

    if(!response.ok) {
      setErrorMsg(response.message)
      setPending(false)
      return
    }
    
    router.push("/projects")
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
        <CardDescription>Enter your email and password to access your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input {...register("email", { required: true })} id="email" type="email" placeholder="john@doe.com" required />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="#"
                className="ml-auto inline-block text-sm underline"
                prefetch={false}>
                Forgot your password?
              </Link>
            </div>
            <Input {...register("password", { required: true })} id="password" type="password" required />
            <p className="text-sm text-red-500">{errorMsg}</p>
          </div>
          <Button disabled={pending} type="submit" className="w-full">
            Sign in
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          You don&apos;t have an account?{" "}
          <Link href="/auth/register" className="underline">
            Register
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
