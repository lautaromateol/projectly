"use client"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { AddOrEditUserStoryForm } from "../forms/AddOrEditUserStoryForm";
import { MoveHorizontalIcon } from "@/icons";
import { UserStoryDetails } from "./UserStoryDetails";
import { deleteUserStory } from "@/actions";
import { ConfirmDelete } from "@/components/ui/ConfirmDelete";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Modal } from "@/components/ui/Modal";

export function Story({ story, projectId }) {

  const tasksLength = story.Task.length
  const completedTasksLength = story.Task.filter((task) => task.status === "Complete").length

  return (
    <Modal>
      <Card>
        <CardHeader>
          <CardTitle>{story.title}</CardTitle>
          <CardDescription>{story.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge>{story.status === "Pending" ? "Pending" : story.status === "InProgress" ? "In Progress" : "Complete"}</Badge>
            <p className="font-medium text-base">Tasks Completed: {completedTasksLength}/{tasksLength}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoveHorizontalIcon className="w-5 h-5" />
                <span className="sr-only">Más opciones</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Modal.Opens opens="user-story-details">
                  <button>Details</button>
                </Modal.Opens>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Modal.Opens opens="edit-story-form">
                  <button>Edit</button>
                </Modal.Opens>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Modal.Opens opens="delete-story">
                  <button>Delete</button>
                </Modal.Opens>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardContent>
      </Card>
      <Modal.Window window="user-story-details">
        <UserStoryDetails projectId={projectId} story={story} />
      </Modal.Window>
      <Modal.Window window="edit-story-form">
        <AddOrEditUserStoryForm projectId={projectId} storyToEdit={story} />
      </Modal.Window>
      <Modal.Window window="delete-story">
        <ConfirmDelete resourceName="User Story" onClick={() => deleteUserStory(projectId, story.id)} />
      </Modal.Window>
    </Modal>
  )
}
