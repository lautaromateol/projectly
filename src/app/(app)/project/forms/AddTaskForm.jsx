"use client"
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { DatePickerWithPresets } from "@/components/ui/DatePicker"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useForm, Controller } from "react-hook-form"
import { addTask } from "@/actions"

export function AddTaskForm({ projectId, onCloseModal }) {

  const { handleSubmit, register, control } = useForm()

  const [date, setDate] = useState()

  const [error, setError] = useState(false)

  async function onSubmit(data) {

    if(!date) {
      setError(true)
      return
    }

    const payload = {
      ...data,
      due: new Date(date)
    }

    const response = await addTask(projectId, payload)

    if (!response.ok) return

    if (response.ok) {
      onCloseModal()
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto py-4">
      <CardHeader>
        <CardTitle>Add Task</CardTitle>
        <CardDescription>Fill out the form to add a new task to your project.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input {...register("title", { required: true })} id="title" placeholder="Enter task title" />
          </div>
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
                    <SelectItem value="ToDo">To do</SelectItem>
                    <SelectItem value="Doing">Doing</SelectItem>
                    <SelectItem value="Done">Done</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Due date</Label>
            <DatePickerWithPresets date={date} setDate={setDate} />
            {error ? <p className="text-sm text-red-500">Please select a due date</p> : ""}
          </div>
          <Button className="mt-2" type="submit">Add Task</Button>
        </form>
      </CardContent>
    </Card>
  );
}

