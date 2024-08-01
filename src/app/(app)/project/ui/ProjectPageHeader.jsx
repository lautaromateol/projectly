import { formatDate } from "@/lib/utils";
import { isBefore } from "date-fns";

export function ProjectPageHeader({ project: { title, startDate, dueDate } }) {

  const time = isBefore(new Date(), new Date(dueDate)) ? "On Time" :
    formatDate(new Date()) === formatDate(new Date(dueDate)) ? "Deliver Today" :
      "Out of Time";

  return (
    <header className="bg-muted px-4 py-6 md:px-6 md:py-8">
      <div
        className="container mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Start: {formatDate(new Date(startDate))}</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
            <span>End: {formatDate(new Date(dueDate))}</span>
          </div>
        </div>
        <div className="rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">{time}</div>
      </div>
    </header>
  );
}
