import { FunctionalRequirements, ProjectDescription, ProjectPageHeader, Tasks, TechStack, UserStories } from "../ui"
import { getProjectById } from "@/actions"
import { notFound } from "next/navigation"

export default async function ProjectPage({ params: { id } }) {

  const response = await getProjectById(id)

  if (!response.ok) {
    notFound()
  }

  const { project } = response

  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex-1 grid gap-6 p-4 sm:px-6 sm:py-0 md:gap-8">
        <ProjectPageHeader project={project} />

        <ProjectDescription description={project.description} />

        <UserStories stories={project.UserStory} projectId={project.id} />

        <Tasks tasks={project.Task} projectId={project.id} />
        
        <FunctionalRequirements requirements={project.FunctionalRequirement} projectId={project.id} />

        <TechStack stacks={project.TechStack} projectId={project.id} />
 
      </main>
    </div>
  );
}
