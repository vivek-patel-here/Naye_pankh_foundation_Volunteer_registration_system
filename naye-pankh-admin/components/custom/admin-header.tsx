import {
  Bell,
  Search,
  UserCircle2,
} from "lucide-react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


export default function AdminHeader() {
  return (
    <header
      className="
        z-50
        h-16
        bg-white
        sticky w-full
        top-0
        border-b
        flex
        items-center
        justify-between
        px-6
      "
    >
      <div className="flex items-center ">
        <SidebarTrigger/>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <input
            placeholder="Search..."
            className="
              h-10
              w-64
              rounded-lg
              border
              pl-10
              pr-4
              text-sm
              outline-none
            "
          />
        </div>

        <Bell
          size={20}
          className="cursor-pointer"
        />

        <div className="flex items-center gap-2">
          <UserCircle2 size={32} />

          <div>
            <p className="text-sm font-medium">
              Admin
            </p>

            <p className="text-xs text-muted-foreground">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}