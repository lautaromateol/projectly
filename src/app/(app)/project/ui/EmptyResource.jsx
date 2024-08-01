import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";

export function EmptyResource({ resource, description, children }) {
  return (
    <Modal>
      <div className="flex flex-col items-center justify-center">
        <div
          className="p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="text-center">
            <FolderMinusIcon className="h-12 w-12 mx-auto text-gray-500 dark:text-gray-400 mb-2" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">There are not {resource}</h2>
            <p className="text-md text-gray-500 dark:text-gray-400 mb-4">
              It seems that you have not created any {description} for this project yet
            </p>
            <Modal.Opens opens="add-form">
              <Button className="capitalize" size="sm">Add {description}</Button>
            </Modal.Opens>
          </div>
        </div>
      </div>
      <Modal.Window window="add-form">
        {children}
      </Modal.Window>
    </Modal>
  );
}

function FolderMinusIcon(props) {
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
      <path d="M9 13h6" />
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>)
  );
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
