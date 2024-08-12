"use client"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"
import { ConfirmDelete } from "@/components/ui/ConfirmDelete"
import { EditTaskForm } from "../forms/EditTaskForm"
import { deleteTask } from "@/actions"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/Modal"

export function Task({ task }) {

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">{task.userStory.title}</div>
            <div className="text-sm text-muted-foreground">{task.userStory.description}</div>
          </div>
          <Badge variant="outline">{task.status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <div className="flex items-center gap-2">
          <Modal>
            <Modal.Opens opens="edit-task-form">
              <Button variant="ghost" size="icon">
                <HiOutlinePencil className="w-4 h-4" />
                <span className="sr-only">Edit</span>
              </Button>
            </Modal.Opens>
            <Modal.Opens opens="delete-task">
              <Button variant="ghost" size="icon">
                <HiOutlineTrash className="w-4 h-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </Modal.Opens>
            <Modal.Window window="edit-task-form">
              <EditTaskForm taskToEdit={task} />
            </Modal.Window>
            <Modal.Window window="delete-task">
              <ConfirmDelete onClick={() => deleteTask(task.projectId, task.id)} resourceName="Task" />
            </Modal.Window>
          </Modal>
        </div>
      </CardFooter>
    </Card>
  )
}