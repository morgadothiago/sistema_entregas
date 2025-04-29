'use client'
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { Menu } from "lucide-react"; // Importando o ícone do menu

export function ButtonMenu() {
  const { toggleSidebar } = useSidebar()
 
  return <button onClick={toggleSidebar} className="md:hidden lg:hidden bg-red-500 flex ">
    <div className=" flex flex-col">
    <div className="w-20 h-20">
        <SidebarTrigger className="w-10 h-10" size={"lg"} />
    </div>

    <div className="">
        <menuitem />
    </div>
    </div>
  </button>
}