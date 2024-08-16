"use client"
import { useSidebarContext } from "@/context/SidebarContext"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi"

export function HandleSidebarBtn({ context }) {

  const { isOpen, close, open } = useSidebarContext()

  if (context === "close") {

    return (
      <div className="flex items-center justify-center absolute top-1/2 right-0 translate-x-1/2 z-10" onClick={close}>
        <button className="grid place-content-center size-6 p-4 rounded-full bg-white border-2">
          <HiOutlineChevronLeft className="size-4" onClick={close} />
        </button>
      </div>
    )
  }
  else return (
    <>
      {
        !isOpen && (
          <div className="flex items-center justify-center absolute top-1/2 -translate-x-1/3 left-0 z-10" onClick={open}>
            <button className="grid place-content-center size-6 p-4 rounded-full bg-white border-2">
              <HiOutlineChevronRight className="size-4" />
            </button>
          </div>
        )
      }
    </>
  )
}