import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

export function Task({ task }) {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">{task.title}</CardTitle>
            <span className="text-xs text-muted-foreground">Due: {formatDate(task.due)}</span>
          </div>
          <CardDescription>{task.description.length <= 44 ? task.description : `${task.description.slice(0, 44)}...`}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
