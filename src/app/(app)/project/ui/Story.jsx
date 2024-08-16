"use client"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { AddOrEditUserStoryForm } from "../forms/AddOrEditUserStoryForm";
import { MoveHorizontalIcon } from "@/icons";
import { UserStoryDetails } from "./UserStoryDetails";
import { deleteUserStory } from "@/actions";
import { ConfirmDelete } from "@/components/ui/ConfirmDelete";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Modal } from "@/components/ui/Modal";
import { formatDate } from "@/lib/utils";

export function Story({ story, projectId }) {

  const tasksLength = story.Task.length
  const completedTasksLength = story.Task.filter((task) => task.status === "Complete").length

  return (
    <Modal>
      <Card>
        <CardHeader>
          <CardTitle>{story.title}</CardTitle>
          <CardDescription>{story.description.length > 110 ? story.description.slice(0, 110) + "..." : story.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
            <Badge>{story.status === "Pending" ? "Pending" : story.status === "InProgress" ? "In Progress" : "Complete"}</Badge>
            <p className="font-medium text-base">Tasks Completed: {completedTasksLength}/{tasksLength}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <p className="text-sm text-gray-500 italic font-semibold">Due date: {formatDate(new Date(story.due))}</p>
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
        </CardFooter>
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
