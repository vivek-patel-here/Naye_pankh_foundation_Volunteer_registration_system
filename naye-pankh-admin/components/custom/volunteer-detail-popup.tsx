"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';


function VolunteerDetails({ open, setOpen, selectedVolunteer, setSelectedVolunteer }: any) {


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[650px]">
                <DialogHeader>
                    <DialogTitle>
                        Volunteer Details
                    </DialogTitle>
                </DialogHeader>

                {selectedVolunteer && (
                    <div className="grid grid-cols-2 gap-4 py-4">

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Full Name
                            </p>

                            <p className="font-medium">
                                {selectedVolunteer.fullname}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Email
                            </p>

                            <p className="font-medium">
                                {selectedVolunteer.email}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Phone Number
                            </p>

                            <p className="font-medium">
                                {selectedVolunteer.phoneNumber}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Age
                            </p>

                            <p className="font-medium">
                                {selectedVolunteer.age}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Gender
                            </p>

                            <p className="font-medium">
                                {selectedVolunteer.gender}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Availability
                            </p>

                            <p className="font-medium">
                                {selectedVolunteer.availability}
                            </p>
                        </div>

                        <div className="col-span-2">
                            <p className="text-sm text-muted-foreground">
                                Skills
                            </p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {selectedVolunteer.skills?.map(
                                    (skill: string) => (
                                        <Badge key={skill}>
                                            {skill}
                                        </Badge>
                                    )
                                )}
                            </div>
                        </div>

                        <div className="col-span-2">
                            <p className="text-sm text-muted-foreground">
                                Address
                            </p>

                            <p className="font-medium">
                                {selectedVolunteer.address}
                            </p>
                        </div>

                        <div className="col-span-2">
                            <p className="text-sm text-muted-foreground">
                                Motivation
                            </p>

                            <p className="font-medium whitespace-pre-wrap">
                                {selectedVolunteer.motivation}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Emergency Contact
                            </p>

                            <p className="font-medium">
                                {selectedVolunteer.emergencyContact}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Status
                            </p>

                            <Badge>
                                {selectedVolunteer.status}
                            </Badge>
                        </div>

                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default VolunteerDetails