"use client"
import { useState } from "react"
import { Label, Input, Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/components/ui/forms"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { HiPlusCircle, HiOutlineTrash } from "react-icons/hi"
import { addTechStack, editTechStack } from "@/actions"
import { Button } from "@/components/ui/button"

export function AddOrEditTechStackForm({ projectId, onCloseModal, stackToEdit = {}, types }) {

  const [isPending, setIsPending] = useState(false)

  const { id, type, tools } = stackToEdit

  const isEditSession = Boolean(id)

  const { handleSubmit, register, control } = useForm({
    defaultValues: isEditSession
      ?
      {
        type,
        tools: tools.map((tool) => {
          return { value: tool }
        })
      }
      :
      { tools: [{ value: "" }] }
  })

  const { append, remove, fields } = useFieldArray({
    control,
    name: "tools"
  })

  async function onSubmit(data) {

    setIsPending(true)

    const toolsData = data.tools.map((req) => req.value).filter((req) => req !== "");

    const payload = {
      type: data.type,
      tools: toolsData,
    };

    const response = isEditSession ? await editTechStack(projectId, id, payload) : await addTechStack(projectId, payload)

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
        <CardTitle>{isEditSession ? "Edit" : "Add"} Tech Stack</CardTitle>
        <CardDescription>Fill out the form to add a tech stack to your project.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <Select onValueChange={(value) => field.onChange(value)} value={field.value} id="type">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      isEditSession ?
                        <SelectItem value={type}>{type}</SelectItem>
                        :
                        types.map((type, i) => (
                          <SelectItem key={i} value={type}>{type}</SelectItem>
                        ))
                    }
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tools">Tools</Label>
            {
              fields.map((item, index) => (
                <div key={item.id} className="flex items-center space-x-2">
                  <Input
                    {...register(`tools.${index}.value`, { required: true })}
                    placeholder="Enter tool name"
                  />
                  {fields.length > 1 && (
                    <HiOutlineTrash type="button" onClick={() => remove(index)} className="cursor-pointer" />
                  )}
                </div>
              ))
            }
            <button type="button" size="sm" onClick={() => append({ value: "" })} className="flex items-center gap-1 cursor-pointer hover:underline">
              <span className="text-xs font-semibold">Add another</span>
              <HiPlusCircle />
            </button>
          </div>
          <Button disabled={isPending} className="mt-2" type="submit">{ isEditSession ? "Edit" : "Add" } Tech Stack</Button>
        </form>
      </CardContent>
    </Card>
  );
}

