"use client"

import {
  Users,
  CalendarDays,
  ClipboardList,
  Clock,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import useStore from "@/components/custom/state_context"


export default function DashboardPage() {
  const {volunteers,events,pending,rejected} = useStore();
  return (
    <div className="space-y-8 p-6">

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-muted-foreground">
          Welcome back, Admin
        </p>
      </div>

      {/* Stats */}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <Card>
          <CardContent className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Total Volunteers
              </p>

              <p className="text-3xl font-bold">
                {volunteers?.length}
              </p>
            </div>

            <Users className="h-8 w-8 text-amber-500" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Active Events
              </p>

              <p className="text-3xl font-bold">
                {events?.length}
              </p>
            </div>

            <CalendarDays className="h-8 w-8 text-amber-500" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Applications
              </p>

              <p className="text-3xl font-bold">
                {pending+rejected}
              </p>
            </div>

            <ClipboardList className="h-8 w-8 text-amber-500" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Volunteer Hours
              </p>

              <p className="text-3xl font-bold">
                10,250
              </p>
            </div>

            <Clock className="h-8 w-8 text-amber-500" />
          </CardContent>
        </Card>

      </div>

      {/* Middle Section */}

      <div className="grid gap-6 lg:grid-cols-2">

        <Card>
          <CardHeader>
            <CardTitle>
              Recent Volunteers
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {(volunteers.filter((vl:any) => vl.status=="Approved")).map((volunteer:any)=>(
              <div
                key={volunteer.email}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="font-medium">
                    {volunteer.fullname}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {volunteer.skills[0]}
                  </p>
                </div>

                <Badge>
                  {volunteer.status}
                </Badge>
              </div>)
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              Upcoming Events
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {events.map((event:any) => (
              <div
                key={event.title}
                className="border rounded-lg p-4"
              >
                <p className="font-semibold">
                  {event.title}
                </p>

                <p className="text-sm text-muted-foreground">
                 {new Date(event.date).toDateString()}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

      </div>

      {/* Volunteers Table */}

      <Card>
        <CardHeader>
          <CardTitle>
            Volunteer Registrations
          </CardTitle>
        </CardHeader>

        <CardContent>

          <Table>

            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Skill</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>

              {volunteers.filter((vl:any)=>vl.status!=="Approved").map((volunteer:any) => (
                <TableRow key={volunteer.email}>
                  <TableCell>
                    {volunteer.fullname}
                  </TableCell>

                  <TableCell>
                    {volunteer.email}
                  </TableCell>

                  <TableCell>
                    {volunteer.skills[0]}
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant={
                        volunteer.status === "Approved"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {volunteer.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}

            </TableBody>

          </Table>

        </CardContent>
      </Card>

    </div>
  )
}