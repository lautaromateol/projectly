import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatDate, getTimeUntilDate } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { isBefore } from "date-fns"

export function UpcomingProjects({ projects }) {

  return (
    <section className="w-full max-w-6xl mx-auto space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Due Dates</h2>
        <h3 className="text-sm font-light text-gray-500">Review your projects due dates</h3>
      </div>

      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Due Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => {

                const time = isBefore(new Date(), new Date(project.dueDate)) ? "On Time" :
                  formatDate(new Date()) === formatDate(new Date(project.dueDate)) ? "Deliver Today" :
                    "Out of Time";

                return (
                  <TableRow key={project.id}>
                    <TableCell>{project.title}</TableCell>
                    <TableCell className="capitalize">
                      <Badge className={`${time === "On Time" ? "bg-green-500 hover:bg-green-600" : time === "Deliver Today" ? "bg-yellow-500 hover:bg-yellow-600" : "bg-red-500 hover:bg-red-500"} text-white`}>{getTimeUntilDate(project.dueDate)}</Badge>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}
