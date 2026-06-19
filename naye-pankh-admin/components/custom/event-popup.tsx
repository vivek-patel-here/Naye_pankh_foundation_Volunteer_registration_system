"use client"
import React, { useState, useEffect } from 'react'
import { Dialog, DialogTrigger, DialogHeader, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import { Plus, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import useStore from './state_context';

function EventPopup({ event, editMode, open, setOpen, setMode, setSelectedEvent }: any) {


    const { server_url, errorToast, successToast, fetchEvents } = useStore();
    const [loading, setLoading] = useState(false);


    const [eventData, setEventData] = useState({
        title: event?.title || "",
        description: event?.description || "",
        location: event?.location || "",
        date: event?.date
            ? event.date.split("T")[0]
            : "",
        volunteersNeeded:
            event?.volunteersNeeded || "",
        image: event?.image || "",
        status: event?.status || "Open",
    });


    useEffect(() => {
        if (event && editMode) {
            setEventData({
                title: event.title || "",
                description: event.description || "",
                location: event.location || "",
                date: event.date
                    ? event.date.split("T")[0]
                    : "",
                volunteersNeeded:
                    event.volunteersNeeded || "",
                image: event.image || "",
                status: event.status || "Open",
            });
        } else {
            setEventData({
                title: "",
                description: "",
                location: "",
                date: "",
                volunteersNeeded: "",
                image: "",
                status: "Open",
            });
        }
    }, [event, editMode, open]);


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setEventData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        setLoading(true);

        try {
            let response;
            if (editMode) {
                response = await fetch(
                    `${server_url}/api/event/${event._id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        body: JSON.stringify(eventData),
                    }
                );
            } else {
                response = await fetch(
                    `${server_url}/api/event`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        body: JSON.stringify(eventData),
                    }
                );
            }

            const parsedResp = await response.json();
            if (!response.ok) throw new Error(parsedResp.message ?? "Process failed , please try again !");
            successToast(parsedResp.message);
            fetchEvents();
        } catch (err) {
            console.error(err);
            errorToast("Unable to create Event at this moment !");
        } finally {
            setLoading(false);
            setOpen(false);
            setMode(false);
            setSelectedEvent(null);
        }
    };



    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-amber-500 hover:bg-amber-600" onClick={() => {
                    setMode(false);
                    setSelectedEvent(null);
                }}>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Event
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>
                        {editMode ? "Edit Event" : "Create New Event"}
                    </DialogTitle>
                </DialogHeader>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 mt-4"
                >
                    <div>
                        <Label>Event Title</Label>
                        <Input
                            name="title"
                            value={eventData.title}
                            onChange={handleChange}
                            placeholder="Tree Plantation Drive"
                        />
                    </div>

                    <div>
                        <Label>Location</Label>
                        <Input
                            name="location"
                            value={eventData.location}
                            onChange={handleChange}
                            placeholder="Delhi"
                        />
                    </div>

                    <div>
                        <Label>Date</Label>
                        <Input
                            type="date"
                            name="date"
                            value={eventData.date}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <Label>Volunteers Needed</Label>
                        <Input
                            type="number"
                            name="volunteersNeeded"
                            value={eventData.volunteersNeeded}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <Label>Image URL</Label>
                        <Input
                            name="image"
                            value={eventData.image}
                            onChange={handleChange}
                            placeholder="https://..."
                        />
                    </div>

                    <div>
                        <Label>Description</Label>
                        <Textarea
                            name="description"
                            value={eventData.description}
                            onChange={handleChange}
                            placeholder="Describe the event..."
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-amber-500 hover:bg-amber-600"
                    >
                        {loading ? <Loader2 className='animate-spin' /> : <p> {editMode ? "Edit Event" : "Create New Event"}</p>}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default EventPopup