"use client"
import { usePaginate } from "@/context/PaginateContext";
import { RESULTS_PER_PAGE } from "@/lib/constants";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

export function Paginate({ results, context }) {

  const resultsPerPage = context === "incomplete-tasks" || context === "complete-tasks" ? 3 : RESULTS_PER_PAGE

  const { setStoriesPage, storiesPage, setRequirementsPage, requirementsPage, incompleteTasksPage, setIncompleteTasksPage, completeTasksPage, setCompleteTasksPage } = usePaginate()

  const currentPage = context === "stories" ? storiesPage : context === "requirements" ? requirementsPage : context === "incomplete-tasks" ? incompleteTasksPage : completeTasksPage

  const totalPages = Math.ceil(results / resultsPerPage)
  const start = (currentPage - 1) * resultsPerPage + 1
  const end = currentPage === totalPages ? results : currentPage * resultsPerPage

  const disabledNext = currentPage === totalPages
  const disabledPrev = currentPage === 1

  function handleNext() {
    if (disabledNext) return
    context === "stories" ? setStoriesPage((current) => current + 1) : context === "requirements" ? setRequirementsPage((current) => current + 1) : context === "incomplete-tasks" ? setIncompleteTasksPage((current) => current + 1) : setCompleteTasksPage((current) => current + 1)
  }

  function handlePrev() {
    if (disabledPrev) return
    context === "stories" ? setStoriesPage((current) => current - 1) : context === "requirements" ? setRequirementsPage((current) => current - 1) : context === "incomplete-tasks" ? setIncompleteTasksPage((current) => current - 1) : setCompleteTasksPage((current) => current - 1)  }

  return (
    <div className="flex justify-between">
      <p>Showing <b>{start}-{end}</b> of <b>{results}</b> results</p>
      <div className="flex items-center gap-4">
        {!disabledPrev && (
          <button disabled={disabledPrev} onClick={handlePrev} className="flex items-center font-semibold">
            <HiOutlineChevronLeft />
            <span>Previous</span>
          </button>
        )}
        {!disabledNext && (
          <button disabled={disabledNext} onClick={handleNext} className="flex items-center font-semibold">
            <span>Next</span>
            <HiOutlineChevronRight />
          </button>
        )}
      </div>
    </div>
  )
}
