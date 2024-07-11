"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useForm, useFieldArray } from "react-hook-form"
import { HiPlusCircle, HiOutlineTrash, HiOutlinePlus } from "react-icons/hi"
import { addFunctionalRequirement } from "@/actions"

export function AddFunctionalRequirementForm({ projectId, onCloseModal }) {

  const { handleSubmit, register, control } = useForm({
    defaultValues: {
      requirements: [{ value: "" }]
    }
  })

  const { append, remove, fields } = useFieldArray({
    control,
    name: "requirements"
  })

  async function onSubmit(data) {
    const requirementsData = data.requirements.map((req) => req.value).filter((req) => req !== "");

    const payload = {
      title: data.title,
      description: data.description,
      requirements: requirementsData,
    };

    const response = await addFunctionalRequirement(projectId, payload)

    if(!response.ok) return

    if(response.ok) {
      onCloseModal()
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto py-4">
      <CardHeader>
        <CardTitle>Add Functional Requirement</CardTitle>
        <CardDescription>Fill out the form to add a functional requirement to your project.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input {...register("title", { required: true })} id="title" placeholder="Enter requirement title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea {...register("description", { required: true })} id="description" placeholder="Describe requirement" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="requirement">Requirements</Label>
            {
              fields.map((item, index) => (
                <div key={item.id} className="flex items-center space-x-2">
                  <Input
                    {...register(`requirements.${index}.value`, { required: true })}
                    placeholder="Enter requirement feature"
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
          <Button className="mt-2" type="submit">Add Functional Requirement</Button>
        </form>
      </CardContent>
    </Card>
  );
}

