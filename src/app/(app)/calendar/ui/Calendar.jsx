"use client"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { formatDate } from '@/lib/utils'

export function Calendar({ projects = [] }) {

  const startDates = projects.map((project) => {
    return {
      title: project.title,
      startDate: new Date(project.startDate),
      dueDate: new Date(project.dueDate),
      date: new Date(project.startDate),
      type: "start",
      status: project.status,
      id: project.id
    }
  })

  const dueDates = projects.map((project) => {
    return {
      title: project.title,
      startDate: new Date(project.startDate),
      dueDate: new Date(project.dueDate),
      date: new Date(project.dueDate),
      type: "due",
      status: project.status,
      id: project.id
    }
  })

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      eventContent={renderEventContent}
      events={[...startDates, ...dueDates]}
    />
  )
}

function renderEventContent(eventInfo) {

  return (
    <div className="p-2 space-y-4">
      <div className="flex flex-col gap-1">
        <h4 className="text-lg lg:text-xl font-semibold">{eventInfo.event.title}</h4>
        <span className={`${eventInfo.event.extendedProps.type === "due" ? "bg-red-500" : "bg-green-500"} text-xs text-white font-medium rounded-full px-1 lg:px-2 py-1`}>{eventInfo.event.extendedProps.type === "due" ? "Due Date" : "Start Date"}</span>
      </div>
      <div className="flex flex-col gap-1 text-xs lg:text-sm">
        <div>Start date: {formatDate(new Date(eventInfo.event.extendedProps.startDate))}</div>
        <div>Due date: {eventInfo.isToday === true ? "Today" : formatDate(new Date(eventInfo.event.extendedProps.dueDate))}</div>
        {/* <div>Status: {eventInfo.event.extendedProps.status === "InProgress" ? "In Progress" : "Complete"}</div> */}
      </div>
    </div>
  )
}