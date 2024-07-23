import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

export function ConfirmDelete({ resourceName, onClick, onCloseModal }) {

  function handleClick() {
    onClick()
    onCloseModal()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Delete {resourceName}</CardTitle>
        <CardDescription>Are you sure that you want to delete this {resourceName}? This action is irreversible.</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-end">
        <div className="flex items-center justify-center gap-2">
          <Button variant="destructive" onClick={handleClick}>Delete</Button>
          <Button className="bg-white text-black border hover:bg-white" onClick={onCloseModal}>Cancel</Button>
        </div>
      </CardContent>
    </Card>
  )
}