export function Overlay({children}) {
  return (
    <div className="fixed inset-0 w-full h-screen bg-black bg-opacity-50 backdrop-blur-sm z-10 transition-all">
      {children}
    </div>
  )
}