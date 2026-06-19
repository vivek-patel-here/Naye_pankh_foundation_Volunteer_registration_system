"use client"

import {
  Download,
  FileText,
  Users,
  CalendarDays,
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import useStore from "@/components/custom/state_context"

export default function ReportsPage() {
  const {pending,rejected,approved,events} = useStore();
  return (
    <div className="space-y-8 p-6">

      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Reports
          </h1>

          <p className="text-muted-foreground">
            Monitor volunteer and event performance
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>

          <Button className="bg-amber-500 hover:bg-amber-600">
            <FileText className="mr-2 h-4 w-4" />
            Generate PDF
          </Button>
        </div>
      </div>

      {/* Summary Cards */}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Volunteers
                </p>

                <p className="text-3xl font-bold">
                  {approved+pending+rejected}
                </p>
              </div>

              <Users className="text-amber-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Events
                </p>

                <p className="text-3xl font-bold">
                  {events?.length}
                </p>
              </div>

              <CalendarDays className="text-amber-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Volunteer Hours
              </p>

              <p className="text-3xl font-bold">
                10,250
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Growth Rate
                </p>

                <p className="text-3xl font-bold text-green-600">
                  +18%
                </p>
              </div>

              <TrendingUp className="text-green-600" />
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Analytics */}

      <div className="grid gap-6 lg:grid-cols-2">

        <Card>
          <CardHeader>
            <CardTitle>
              Volunteer Distribution
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            <div>
              <div className="flex justify-between mb-2">
                <span>Education</span>
                <span>40%</span>
              </div>

              <div className="h-3 rounded-full bg-neutral-200">
                <div className="h-3 w-[40%] rounded-full bg-amber-500" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Healthcare</span>
                <span>25%</span>
              </div>

              <div className="h-3 rounded-full bg-neutral-200">
                <div className="h-3 w-[25%] rounded-full bg-amber-500" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Environment</span>
                <span>20%</span>
              </div>

              <div className="h-3 rounded-full bg-neutral-200">
                <div className="h-3 w-[20%] rounded-full bg-amber-500" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Community Service</span>
                <span>15%</span>
              </div>

              <div className="h-3 rounded-full bg-neutral-200">
                <div className="h-3 w-[15%] rounded-full bg-amber-500" />
              </div>
            </div>

          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              Event Statistics
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            <div className="flex justify-between">
              <span>Completed Events</span>
              <span className="font-semibold">
                8
              </span>
            </div>

            <div className="flex justify-between">
              <span>Upcoming Events</span>
              <span className="font-semibold">
                4
              </span>
            </div>

            <div className="flex justify-between">
              <span>Total Participants</span>
              <span className="font-semibold">
                450
              </span>
            </div>

            <div className="flex justify-between">
              <span>Average Attendance</span>
              <span className="font-semibold">
                56
              </span>
            </div>

          </CardContent>
        </Card>

      </div>

      {/* Recent Reports */}

      <Card>
        <CardHeader>
          <CardTitle>
            Recent Reports
          </CardTitle>
        </CardHeader>

        <CardContent>

          <div className="space-y-4">

            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="font-medium">
                  Monthly Volunteer Report
                </p>

                <p className="text-sm text-muted-foreground">
                  Generated on 12 June 2026
                </p>
              </div>

              <Button size="sm" variant="outline">
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="font-medium">
                  Event Participation Report
                </p>

                <p className="text-sm text-muted-foreground">
                  Generated on 08 June 2026
                </p>
              </div>

              <Button size="sm" variant="outline">
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">
                  Annual Impact Summary
                </p>

                <p className="text-sm text-muted-foreground">
                  Generated on 01 June 2026
                </p>
              </div>

              <Button size="sm" variant="outline">
                Download
              </Button>
            </div>

          </div>

        </CardContent>
      </Card>

    </div>
  )
}