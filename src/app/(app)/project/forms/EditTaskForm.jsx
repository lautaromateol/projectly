"use client"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/forms/select"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { useForm, Controller } from "react-hook-form"
import { Textarea, Label } from "@/components/ui/forms"
import { useState } from "react"
import { editTask } from "@/actions"
import { Button } from "@/components/ui/button"

export function EditTaskForm({ taskToEdit: { id, description, status, projectId }, onCloseModal }) {

  const [isPending, setIsPending] = useState(false)

  const { handleSubmit, register, control, formState: { isDirty } } = useForm({
    defaultValues: {
      description,
      status
    }
  })

  async function onSubmit(data) {

    setIsPending(true)

    const response = await editTask(projectId, id, data)

    if (!response.ok) {
      setIsPending(false)
      return
    }

    if (response.ok) {
      onCloseModal()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Task</CardTitle>
        <CardDescription>Fill out the form inputs to edit this task.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea {...register("description", { required: true })} id="description" placeholder="Describe the task" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select onValueChange={(value) => field.onChange(value)} value={field.value} id="status">
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Complete">Complete</SelectItem>
                    <SelectItem value="Incomplete">Incomplete</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <Button disabled={isPending || !isDirty} className="mt-2" type="submit">Edit Task</Button>
        </form>
      </CardContent>
    </Card>
  );
}

