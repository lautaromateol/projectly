import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectDescription({ description }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Description</CardTitle>
        <CardDescription>An overview of the project</CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  )
}
