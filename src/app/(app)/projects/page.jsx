import { getProjects } from "@/actions";
import ProjectsPage from "./ui/ProjectsPage";

export default async function Projects() {

  const response = await getProjects()

  if (response.ok) {

    const { projects } = response

    return (
      <ProjectsPage projects={projects} />
    )
  }
}
