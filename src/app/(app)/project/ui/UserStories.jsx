"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Modal } from "@/components/ui/Modal"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AddUserStoryForm } from "../forms/AddUserStoryForm"

export function UserStories({ stories, projectId }) {
  return (
    <section className="grid gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">User Stories</h2>
        <Modal>
          <Modal.Opens opens="form">
            <Button size="sm">Add Story</Button>
          </Modal.Opens>
          <Modal.Window window="form">
            <AddUserStoryForm projectId={projectId} />
          </Modal.Window>
        </Modal>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {
          stories.map((story) => (
            <Card key={story.id}>
              <CardHeader>
                <CardTitle>{story.title}</CardTitle>
                <CardDescription>{story.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge>{story.status === "Pending" ? "Pending" : story.status === "InProgress" ? "In Progress" : "Complete"}</Badge>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </section>
  )
}
