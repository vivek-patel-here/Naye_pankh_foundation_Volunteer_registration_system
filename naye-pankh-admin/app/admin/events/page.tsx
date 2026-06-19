"use client"

import {
  CalendarDays,
  MapPin,
  Users,
  Plus,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import EventPopup from "@/components/custom/event-popup"
import useStore from "@/components/custom/state_context"
import { useState } from "react"


export default function EventsPage() {

  const { events, server_url, successToast, errorToast, fetchEvents } = useStore();
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [editMode,setMode] = useState<boolean>(false) ; // false -> add new Event && true -> edit existing mode

  const deleteEvent = async (eventId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `${server_url}/api/event/${eventId}`,
        {
          method: "DELETE",
        }
      );

      const parsedResp = await response.json();

      if (!response.ok) {
        throw new Error(parsedResp.message);
      }

      successToast(parsedResp.message);

      fetchEvents();
    } catch (err: any) {
      errorToast("Unable to delete event");
      console.log(err);
    }
  };


  return (
    <div className="space-y-8 p-6">

      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Events
          </h1>

          <p className="text-muted-foreground">
            Manage volunteer opportunities
          </p>
        </div>

        <EventPopup editMode={editMode} open={open} setOpen={setOpen} event={selectedEvent} setMode={setMode} setSelectedEvent={setSelectedEvent}/>
      </div>

      {/* Stats */}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Total Events
            </p>

            <p className="text-3xl font-bold mt-2">
              12
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Upcoming
            </p>

            <p className="text-3xl font-bold mt-2">
              8
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Open Registrations
            </p>

            <p className="text-3xl font-bold mt-2">
              5
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Completed
            </p>

            <p className="text-3xl font-bold mt-2">
              4
            </p>
          </CardContent>
        </Card>

      </div>

      {/* Events Grid */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {events.map((event: any) => (
          <Card
            key={event._id}
            className="overflow-hidden hover:shadow-xl transition-all"
          >

            <img
              src={event.image}
              alt={event.title}
              className="h-52 w-full object-cover"
            />

            <CardContent className="p-5">

              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-xl">
                  {event.title}
                </h2>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                  {event.status}
                </span>
              </div>

              <div className="space-y-3 text-muted-foreground">

                <div className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  <span>{new Date(event.date).toDateString()}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>
                    {event.volunteers} Volunteers Needed
                  </span>
                </div>

              </div>

              <div className="flex gap-2 mt-6">

                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setSelectedEvent(event);
                    setMode(true);
                    setOpen(true);
                  }}
                >
                  Edit
                </Button>

                <Button
                  variant="destructive"
                  className="flex-1"
                  onClick={() => deleteEvent(event._id)}
                >
                  Delete
                </Button>

              </div>

            </CardContent>

          </Card>
        ))}

      </div>

    </div>
  )
}