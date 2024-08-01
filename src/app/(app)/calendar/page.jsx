import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjects } from "@/actions";
import { Calendar } from "./ui/Calendar";

export default async function CalendarPage() {

  const response = await getProjects()

  if(response.ok) {
    const { projects } = response

    return (
      <Card>
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
          <CardDescription>Review all your important dates in a efficient way.</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar projects={projects} />
        </CardContent>
      </Card>
    )
  }
}