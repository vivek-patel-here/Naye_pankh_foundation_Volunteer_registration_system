"use client"
import React from 'react'
import {Calendar,MapPin,UsersRound } from "lucide-react";
import Link  from 'next/link';
import useStore from '@/app/storeContext';

function Events() {

  const {events} = useStore();


  return (
    <div className="py-24 bg-neutral-50 text-xs" id='events-e6d7sj'>
  <div className="max-w-7xl mx-auto px-6">
    
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold">
        Upcoming Events
      </h2>

      <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
        Participate in community-driven initiatives and
        make a meaningful impact through volunteer work.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {events.map((event:any) => (
        <div
          key={event._id}
          className="
            bg-white
            overflow-hidden
            shadow-lg
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all
            duration-300
          "
        >
          <img
            src={event.image}
            alt={event.title}
            className="h-56 w-full object-cover"
          />

          <div className="p-6">
            <span className="
              bg-green-100
              text-green-700
              text-xs
              px-3
              py-1
              rounded-full
            ">
              Open
            </span>

            <h3 className="text-xl font-bold mt-4">
              {event.title}
            </h3>

            <div className="mt-4 space-y-2 text-gray-600">
              <p className='flex items-center justify-center gap-1 w-fit'><Calendar size={15}/> {new Date(event.date).toDateString()}</p>
              <p className='flex items-center justify-center gap-1 w-fit'><MapPin size={15}/> {event.location}</p>
              <p className='flex items-center justify-center gap-1 w-fit'><UsersRound size={15}/> {event.volunteersNeeded} Volunteers Needed</p>
            </div>

            <Link href="/register">
                <button  className="
                mt-6
                w-full
                bg-yellow-400
                hover:bg-yellow-400
                py-3
                transition
                cursor-pointer
              ">
            Join Event
                </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}

export default Events