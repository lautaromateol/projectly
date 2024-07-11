"use client"
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { AddFunctionalRequirementForm } from "../forms/AddFunctionalRequirementsForm";

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
            <AddFunctionalRequirementForm projectId={projectId} />
          </Modal.Window>
        </Modal>
      </div>
      <div className="grid gap-4">
        {
          requirements.map((requirement) => (
            <Card key={requirement.id}>
              <CardHeader>
                <CardTitle>{requirement.title}</CardTitle>
                <CardDescription>
                  {requirement.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {requirement.requirements.map((req, i) => (
                    <li key={i}>
                      <div className="flex items-center gap-2">
                        <CheckIcon className="w-4 h-4" />
                        <span>{req}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>)
  );
}
