import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Chart({ title, data }) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle>{data}</CardTitle>
      </CardHeader>
    </Card>
  )
}
