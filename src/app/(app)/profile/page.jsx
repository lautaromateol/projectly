import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { auth } from "@/lib/auth.config"
import Link from "next/link"

export default async function ProfilePage() {

  const session = await auth()

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 md:px-6">
      <div className="grid gap-8">
        <div className="bg-background rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>LM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="text-lg font-medium">{session.user.name}</div>
              <div className="text-sm text-muted-foreground">Project Manager</div>
              <div className="text-sm text-muted-foreground">{session.user.email}</div>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Projects</h2>
            <Link
              href="#"
              className="text-sm text-primary hover:underline"
              prefetch={false}>
              View all
            </Link>
          </div>
          <div className="grid gap-4">
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Website Redesign</div>
                <div
                  className="px-2 py-1 bg-primary text-primary-foreground rounded-md text-xs font-medium">
                  In Progress
                </div>
              </div>
              <div className="text-sm text-muted-foreground mt-2">Due: June 30, 2023</div>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Mobile App Development</div>
                <div
                  className="px-2 py-1 bg-green-500 text-white rounded-md text-xs font-medium">Completed</div>
              </div>
              <div className="text-sm text-muted-foreground mt-2">Due: April 15, 2023</div>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Marketing Campaign</div>
                <div
                  className="px-2 py-1 bg-red-500 text-white rounded-md text-xs font-medium">Overdue</div>
              </div>
              <div className="text-sm text-muted-foreground mt-2">Due: May 1, 2023</div>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Profile Settings</h2>
            <Button>Save Changes</Button>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue={session.user.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue={session.user.email} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" defaultValue="Project Manager" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                rows={3}
                defaultValue="I'm a project manager with 5 years of experience." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
