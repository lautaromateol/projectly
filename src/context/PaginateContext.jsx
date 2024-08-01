"use client"
import { createContext, useContext, useState } from "react"

const PaginateContext = createContext()

export function PaginateProvider({ children }) {

  const [storiesPage, setStoriesPage] = useState(1)
  const [requirementsPage, setRequirementsPage] = useState(1)
  const [incompleteTasksPage, setIncompleteTasksPage] = useState(1)
  const [completeTasksPage, setCompleteTasksPage] = useState(1)

  return (
    <PaginateContext.Provider value={{
      storiesPage,
      setStoriesPage,
      requirementsPage,
      setRequirementsPage,
      incompleteTasksPage,
      setIncompleteTasksPage,
      completeTasksPage,
      setCompleteTasksPage
    }}>
      {children}
    </PaginateContext.Provider>
  )

}

export function usePaginate() {
  return useContext(PaginateContext)
}