import { Input } from "@/components/ui/forms"
import { Button } from "@/components/ui/button"

export function ComingSoon() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Coming Soon: Create projects with Artificial Intelligence
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We are pleased to announce that soon users will be able to create projects using the power of AI.
          </p>
        </div>
        {/* <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex gap-2">
            <Input type="email" placeholder="Ingresa tu email" className="max-w-lg flex-1" />
            <Button type="submit">Register</Button>
          </form>
          <p className="text-xs text-muted-foreground">You will be notified at the release time.</p>
        </div> */}
      </div>
    </section>
  )
}