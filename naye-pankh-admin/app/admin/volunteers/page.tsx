"use client"

import { Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import useStore from "@/components/custom/state_context"
import { useEffect, useState } from "react"
import VolunteerDetails from "@/components/custom/volunteer-detail-popup"


export default function VolunteersPage() {
  const { volunteers, approved, rejected, pending, fetchVolunteers, server_url, successToast, errorToast } = useStore();
  const [query, setQuery] = useState<string>("");

  const [selectedVolunteer, setSelectedVolunteer] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const deleteVolunteer = async (volunteer_id: any) => {
    console.log(volunteer_id)
    try {
      const response = await fetch(`${server_url}/api/volunteer/${volunteer_id}`, {
        method: "DELETE"
      });
      const parsedResp = await response.json();
      console.log(parsedResp);
      if (!response.ok) {
        throw new Error(parsedResp.message ?? "Unable to delete volunteer");
      }

      successToast(parsedResp.message);
      fetchVolunteers();
    } catch (err) {
      console.error(err);
      errorToast("Unable to detele at this moment");
    }
  }


  const updateVolunteerStatus = async (
    volunteerId: string,
    status: string
  ) => {
    try {
      const response = await fetch(
        `${server_url}/api/volunteer/${volunteerId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      const parsedResp = await response.json();

      if (!response.ok) {
        throw new Error(parsedResp.message);
      }

      successToast("Status updated");
      fetchVolunteers();
    } catch (err) {
      console.error(err);
      errorToast("Failed to update status");
    }
  };

  const [filteredVolunteer, setfilterVolunteer] = useState<any[]>(volunteers);

  useEffect(() => {
    setfilterVolunteer(volunteers.filter((vol: any) => {
      return vol.fullname.includes(query.trim()) || vol.email.includes(query.trim());
    }))
  }, [query, volunteers]);


  return (
    <div className="space-y-8 p-6">

      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Volunteers
          </h1>

          <p className="text-muted-foreground">
            Manage volunteer registrations
          </p>
        </div>
      </div>

      {/* Stats */}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Total Volunteers
            </p>

            <div className="flex items-center justify-between mt-2">
              <p className="text-3xl font-bold">
                {volunteers?.length}
              </p>

              <Users className="text-amber-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Approved
            </p>

            <p className="text-3xl font-bold mt-2">
              {approved}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Pending
            </p>

            <p className="text-3xl font-bold mt-2">
              {pending}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Rejected
            </p>

            <p className="text-3xl font-bold mt-2">
              {rejected}
            </p>
          </CardContent>
        </Card>

      </div>

      {/* Search */}

      <Card>
        <CardContent className="pt-6">

          <div className="relative max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <Input
              placeholder="Search volunteers..."
              className="pl-10"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
              }}
            />
          </div>

        </CardContent>
      </Card>

      {/* Table */}

      <Card>
        <CardContent className="pt-6">

          <Table>

            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Skill</TableHead>
                <TableHead>Availability</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>

              {filteredVolunteer.map((volunteer: any) => (
                <TableRow key={volunteer._id}>

                  <TableCell className="font-medium">
                    {volunteer.fullname}
                  </TableCell>

                  <TableCell>
                    {volunteer.email}
                  </TableCell>

                  <TableCell>
                    {volunteer.phoneNumber}
                  </TableCell>

                  <TableCell>
                    {volunteer.skills[0]}
                  </TableCell>

                  <TableCell>
                    {volunteer.availability}
                  </TableCell>

                  <TableCell>
                    <Select
                      value={volunteer.status}
                      onValueChange={(value) =>
                        updateVolunteerStatus(
                          volunteer._id,
                          value
                        )
                      }
                    >
                      <SelectTrigger className="w-[130px]">
                        <SelectValue />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="Pending">
                          Pending
                        </SelectItem>

                        <SelectItem value="Approved">
                          Approved
                        </SelectItem>

                        <SelectItem value="Rejected">
                          Rejected
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setSelectedVolunteer(volunteer);
                          setOpen(true);
                        }}
                      >
                        View
                      </Button>

                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteVolunteer(volunteer._id)}
                      >
                        Delete
                      </Button>

                    </div>
                  </TableCell>

                </TableRow>
              ))}

            </TableBody>

          </Table>

        </CardContent>
      </Card>
      <VolunteerDetails open={open} setOpen={setOpen} selectedVolunteer={selectedVolunteer} setSelectedVolunteer={setSelectedVolunteer} />

    </div>
  )
}