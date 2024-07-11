import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AddOrEditTechStackForm } from "../forms/AddOrEditTechStackForm";
import { HiOutlinePencil } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";

export function Stack({ stack, projectId }) {
  return (
    <Card key={stack.id}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{stack.type}</CardTitle>
          <Modal>
            <Modal.Opens opens="tech-stack-form">
            <Button size="sm">
              <HiOutlinePencil />
            </Button>
            </Modal.Opens>
            <Modal.Window window="tech-stack-form">
              <AddOrEditTechStackForm stackToEdit={stack} projectId={projectId} />
            </Modal.Window>
          </Modal>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-muted-foreground">
          {
            stack.tools.map((t, i) => (
              <li key={i}>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4" />
                  <span>{t}</span>
                </div>
              </li>
            ))
          }
        </ul>
      </CardContent>
    </Card>
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
