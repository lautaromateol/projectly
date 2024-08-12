import { HomeHeader } from "@/components/ui/home";

export default function LandingLayout({ children }) {
  return (
    <>
      <HomeHeader />
      {children}
    </>
  )
}
