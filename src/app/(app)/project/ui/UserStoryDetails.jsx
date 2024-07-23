import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { HiOutlineCheck, HiOutlinePlusCircle, HiOutlineX } from "react-icons/hi"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/forms/input"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"
import { addTask, editTask } from "@/actions"

export function UserStoryDetails({ projectId, story }) {

  const { Task: tasks } = story

  const [showInput, setShow] = useState(false)

  const [task, setTask] = useState("")

  async function handleAddTask(e) {
    e.preventDefault()

    const response = await addTask(projectId, story.id, task)

    if (!response.ok) return

    handleCancel()
  }

  async function handleCancel() {
    setTask("")
    setShow(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{story.title}</CardTitle>
        <CardDescription>
          {story.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="sm:max-w-[800px]">
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="text-sm font-medium text-muted-foreground">Due date</div>
            <div className="text-sm">{formatDate(story.due)}</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="text-sm font-medium text-muted-foreground">Status</div>
            <Badge variant="outline">{story.status === "Pending" ? "Pending" : story.status === "InProgress" ? "In Progress" : "Complete"}</Badge>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="text-sm font-medium text-muted-foreground">Asigned to</div>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
            </div>
          </div>
          {tasks.length > 0 && (
            <>
              <Separator />
              <div className="grid gap-2">
                <div className="text-sm font-medium text-muted-foreground">Tasks</div>
                <div className="grid gap-4">
                  {tasks?.map((task) => (
                    <Task key={task.id} id={task.id} description={task.description} status={task.status} projectId={projectId} />
                  )
                  )}
                </div>
              </div>
            </>
          )}
          {showInput && (
            <form onSubmit={handleAddTask} className="w-1/2 flex items-center justify-center gap-2">
              <Input onChange={(e) => setTask(e.target.value)} value={task} placeholder="Task name" />
              <div className="flex gap-1">
                <button type="submit">
                  <HiOutlineCheck className="cursor-pointer" />
                </button>
                <button type="button">
                  <HiOutlineX onClick={handleCancel} className="cursor-pointer" />
                </button>
              </div>
            </form>
          )}
          <div onClick={() => setShow(true)} className="flex items-center gap-2 cursor-pointer">
            <HiOutlinePlusCircle />
            <p className="text-sm font-semibold">Add task</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Task({ id, description, status, projectId }) {

  const [isPending, setIsPending] = useState(false)

  async function handleEditTask() {

    setIsPending(true)

    const payload = {
      description,
      status: status === "Complete" ? "Incomplete" : "Complete"
    }

    const response = await editTask(projectId, id, payload)

    if(!response.ok) {
      setIsPending(false)
      return
    }

    setIsPending(false)
    
  }

  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
      <input disabled={isPending} type="checkbox" onChange={handleEditTask} defaultChecked={status === "Complete"} />
      <div className="text-sm">{description}</div>
      <Badge variant="outline">{status}</Badge>
    </div>
  )
}