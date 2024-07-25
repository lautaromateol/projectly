"use client";
import { Modal } from "@/components/ui/Modal"
import { Button } from "@/components/ui/button"
import { Story } from "./Story";
import { AddOrEditUserStoryForm } from "../forms/AddOrEditUserStoryForm"

export function UserStories({ stories, projectId }) {
  return (
    <section className="grid gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">User Stories</h2>
        <Modal>
          <Modal.Opens opens="add-story-form">
            <Button size="sm">Add Story</Button>
          </Modal.Opens>
          <Modal.Window window="add-story-form">
            <AddOrEditUserStoryForm projectId={projectId} />
          </Modal.Window>
        </Modal>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {
          stories.map((story) => (
            <Story key={story.id} story={story} projectId={projectId} />
          ))
        }
      </div>
    </section>
  )
}
