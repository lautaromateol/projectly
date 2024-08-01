"use client";
import { EmptyResource, Paginate, Story } from ".";
import { AddOrEditUserStoryForm } from "../forms/AddOrEditUserStoryForm"
import { RESULTS_PER_PAGE } from "@/lib/constants";
import { usePaginate } from "@/context/PaginateContext";
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/Modal"

export function UserStories({ stories, projectId }) {

  const { storiesPage } = usePaginate()

  const start = (storiesPage - 1) * RESULTS_PER_PAGE
  const end = storiesPage * RESULTS_PER_PAGE

  const results = stories.slice(start, end)

  return (
    <section className="grid gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">User Stories</h2>
        {results.length > 0 && <Modal>
          <Modal.Opens opens="add-story-form">
            <Button size="sm">Add Story</Button>
          </Modal.Opens>
          <Modal.Window window="add-story-form">
            <AddOrEditUserStoryForm projectId={projectId} />
          </Modal.Window>
        </Modal>}
      </div>
      {results.length > 0 ?
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {
              results.map((story) => (
                <Story key={story.id} story={story} projectId={projectId} />
              ))
            }
          </div>
          <Paginate results={stories.length} context="stories" />
        </>
        :
        <EmptyResource resource="User Stories" description="user story">
          <AddOrEditUserStoryForm projectId={projectId} />
        </EmptyResource>
      }
    </section>
  )
}
