"use client";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";
import { Stack } from "./Stack";
import { AddOrEditTechStackForm } from "../forms/AddOrEditTechStackForm";
import { EmptyResource } from ".";

export function TechStack({ stacks, projectId }) {

  const types = stacks.map((stack) => stack.type)

  return (
    <section className="grid gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        {stacks.length === 1 && (
          <Modal>
            <Modal.Opens opens="tech-stack-form">
              <Button size="sm">Add Technology</Button>
            </Modal.Opens>
            <Modal.Window window="tech-stack-form">
              <AddOrEditTechStackForm
                projectId={projectId}
                types={types.length === 0 ? ["Frontend", "Backend"] : types.includes("Frontend") ? ["Backend"] : ["Frontend"]}
              />
            </Modal.Window>
          </Modal>
        )}
      </div>
      {stacks.length > 0 ?

        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          {
            stacks.map((stack) => (
              <Stack key={stack.id} stack={stack} projectId={projectId} />
            ))
          }
        </div>

        :
        <EmptyResource resource="Tech Stacks" description="stack">
          <AddOrEditTechStackForm
            projectId={projectId}
            types={["Frontend", "Backend"]}
          />
        </EmptyResource>
      }
    </section>
  )
}
