import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/forms/textarea";
import Link from "next/link";

export default function CreationPage() {
  return (
    <main className="flex items-center justify-center w-full min-h-screen">
      <Link href="/projects" className="absolute top-5 right-5 font-light text-indigo-300 hover:text-indigo-400 hover:underline">Go to projects &rarr;</Link>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">What do you want to create today?</h1>
        <div className="w-2/3 mx-auto space-y-4">
          <Textarea placeholder="A task management application" />
          <Button>Create &rarr;</Button>
        </div>
      </div>
    </main>
  )
}
