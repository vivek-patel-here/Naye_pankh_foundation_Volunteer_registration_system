"use client"
import React from 'react'
import {
    GraduationCap,
    Trees,
    HeartPulse,
    Utensils,
    Handshake,
    CalendarDays,
} from "lucide-react";


function Impact() {
    const impacts = [
        {
            Icon: GraduationCap,
            title: "Education Support",
            description:
                "Help students through mentoring, tutoring, and skill-building programs.",
        },
        {
            Icon: Trees,
            title: "Environmental Care",
            description:
                "Participate in tree plantation drives, clean-up campaigns, and sustainability initiatives.",
        },
        {
            Icon: HeartPulse,
            title: "Healthcare Assistance",
            description:
                "Support health camps, awareness programs, and community outreach activities.",
        },
        {
            Icon: Utensils,
            title: "Food Distribution",
            description:
                "Assist in organizing and distributing meals to underprivileged communities.",
        },
        {
            Icon: Handshake,
            title: "Community Service",
            description:
                "Engage in projects that strengthen communities and improve quality of life.",
        },
        {
            Icon: CalendarDays,
            title: "Event Management",
            description:
                "Coordinate volunteer events, fundraising campaigns, and awareness drives.",
        },
    ];


    return (
       <div
  className="w-full bg-white flex justify-center px-4 py-10 md:py-0"
  id="impact-x4s6hf"
>
  <div
    className="
      w-full
      max-w-7xl
      md:w-[85%]
      md:-translate-y-10
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-6
      bg-neutral-50
      p-4
      md:p-8
      shadow-2xl
      shadow-black/20
    "
  >
    {impacts.map((el, k) => (
      <div
        key={k}
        className="
          min-h-55
          border
          border-amber-400/50
          flex
          flex-col
          gap-4
          items-center
          justify-center
          p-6
          text-center
          hover:-translate-y-2
          hover:shadow-lg
          transition-all
          duration-300
        "
      >
        <el.Icon
          size={30}
          strokeWidth={1}
          className="text-amber-400"
        />

        <h1 className="text-lg md:text-xl font-bold">
          {el.title}
        </h1>

        <p className="text-sm text-neutral-700/80 max-w-62.5">
          {el.description}
        </p>
      </div>
    ))}
  </div>
</div>
    )
}

export default Impact