"use server";
import { auth } from "@/lib/auth.config";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function editFunctionalRequirement(projectId, id, requirement) {
  try {
    const session = await auth()

    const isAuthenticated = !!session?.user

    if (!isAuthenticated) {
      return {
        ok: false,
        message: "You must be authenticated to create a functional requirement"
      }
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
    })

    if (project.userId !== session.user.id) {
      return {
        ok: false,
        message: "You are trying to update a project of another user"
      }
    }

    const { title, description, requirements } = requirement

    const dbRequirement = await prisma.functionalRequirement.update({
      where: { id },
      data: {
        title,
        description,
        projectId
      },
      include: {
        Requirement: true
      }
    })

    const clientRequirementsIds = requirements.filter((req) => req.id).map((req) => req.id)

    const requirementsToDelete = dbRequirement.Requirement.filter((req) => !clientRequirementsIds.includes(req.id))

    const requirementsToUpdate = requirements.filter((req) => req.id)

    const requirementsToAdd = requirements.filter((req) => !req.id)
      .map((req) => {
        return {
          description: req.value,
          status: "Incomplete"
        }
      })

    const deletePromise = requirementsToDelete.map((req) => prisma.requirement.delete({ where: { id: req.id } }))

    const updatePromise = requirementsToUpdate.map((req) => prisma.requirement.update({ where: { id: req.id }, data: { description: req.value } }))

    const addPromise = requirementsToAdd.map((req) => prisma.requirement.create({ data: { ...req, functionalRequirementId: id } }))

    await Promise.all([...deletePromise, ...updatePromise, ...addPromise])

    revalidatePath(`/project/${projectId}`)

    return { ok: true }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: "Error updating the functional requirement"
    }
  }
}