"use client"
import { AddOrEditFunctionalRequirementsForm } from "../forms/AddOrEditFunctionalRequirementsForm";
import { Requirement } from "./Requirement";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";

export function FunctionalRequirements({ requirements, projectId }) {
  return (
    <section className="grid gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Functional Requirements</h2>
        <Modal>
          <Modal.Opens opens="requirements-form">
            <Button size="sm">Add Requirement</Button>
          </Modal.Opens>
          <Modal.Window window="requirements-form">
            <AddOrEditFunctionalRequirementsForm projectId={projectId} />
          </Modal.Window>
        </Modal>
      </div>
      <div className="grid gap-4">
        {
          requirements.map((requirement) => (
           <Requirement key={requirement.id} requirement={requirement} projectId={projectId} />
          ))
        }
      </div>
    </section>
  )
}

