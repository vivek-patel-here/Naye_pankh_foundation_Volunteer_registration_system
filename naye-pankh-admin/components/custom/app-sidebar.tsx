"use client"

import Link from "next/link"
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  FileBarChart,
  Settings,
  LogOut,
  HeartHandshake,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Volunteers",
    url: "/admin/volunteers",
    icon: Users,
  },
  {
    title: "Events",
    url: "/admin/events",
    icon: CalendarDays,
  },
  {
    title: "Reports",
    url: "/admin/reports",
    icon: FileBarChart,
  }
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-4">
            <img src="/Logo.png" alt=""  className="h-15 w-15"/>

          <div>
            <div>
                <h2 className="font-bold text-sm">
              NayePankh
            </h2>
            <p className="text-xs">Foundation</p>
            </div>
            

            <p className="text-xs text-muted-foreground">
              Admin Panel
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="border-t p-3">
          <div className="mb-3">
            <p className="font-medium">
              Admin
            </p>

            <p className="text-xs text-muted-foreground">
              admin@nayepankh.org
            </p>
          </div>

          <SidebarMenuButton>
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}