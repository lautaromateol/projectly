import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Task({ task }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{task.project.title}</CardTitle>
        <CardDescription>
          {task.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-muted-foreground text-sm">Diseñador UX</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{task.status}</Badge>
            <span className="text-muted-foreground text-sm">Vence el 15/05/2023</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Mark as completed
          </Button>
          <Button variant="ghost" size="sm">
            <HiOutlinePencil className="h-4 w-4" />
            Edit
          </Button>
          <Button variant="ghost" size="sm" className="text-red-500">
            <HiOutlineTrash className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
