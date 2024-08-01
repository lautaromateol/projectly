"use client"
import { RESULTS_PER_PAGE } from "@/lib/constants";
import { EmptyResource, Requirement, Paginate } from ".";
import { AddOrEditFunctionalRequirementsForm } from "../forms/AddOrEditFunctionalRequirementsForm";
import { usePaginate } from "@/context/PaginateContext";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";

export function FunctionalRequirements({ requirements, projectId }) {

  const { requirementsPage } = usePaginate()

  const start = (requirementsPage - 1) * RESULTS_PER_PAGE
  const end = requirementsPage * RESULTS_PER_PAGE

  const results = requirements.slice(start, end)

  return (
    <section className="grid gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Functional Requirements</h2>
        {results.length > 0 && <Modal>
          <Modal.Opens opens="requirements-form">
            <Button size="sm">Add Requirement</Button>
          </Modal.Opens>
          <Modal.Window window="requirements-form">
            <AddOrEditFunctionalRequirementsForm projectId={projectId} />
          </Modal.Window>
        </Modal>}
      </div>
      {results.length > 0 ?
        <>
          <div className="grid gap-4">
            {
              results.map((requirement) => (
                <Requirement key={requirement.id} requirement={requirement} projectId={projectId} />
              ))
            }
          </div>
          <Paginate results={requirements.length} context="requirements" />
        </>
        :
        <EmptyResource resource="Functional Requirements" description="functional requirement">
          <AddOrEditFunctionalRequirementsForm projectId={projectId} />
        </EmptyResource>
      }
    </section>
  )
}

