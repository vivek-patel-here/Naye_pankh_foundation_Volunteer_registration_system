import React from 'react'
import {Mail,MapPin,Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white text-xs">
  <div className="max-w-7xl mx-auto px-8 py-16">
    <div className="grid md:grid-cols-4 gap-12">


      <div>
        <div className="flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="NayePankh"
            className="h-12 w-12"
          />

          <div>
            <h2 className="font-bold text-xl">
              NayePankh
            </h2>

            <p className="text-sm text-neutral-400">
              Foundation
            </p>
          </div>
        </div>

        <p className="mt-4 text-neutral-400 leading-relaxed">
          Empowering communities through volunteer-driven
          initiatives in education, healthcare, environmental
          conservation, and social welfare.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">
          Quick Links
        </h3>

        <ul className="space-y-3 text-neutral-400">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Impact Areas</a></li>
          <li><a href="#">Upcoming Events</a></li>
        </ul>
      </div>


      <div>
        <h3 className="font-semibold text-lg mb-4">
          Volunteer
        </h3>

        <ul className="space-y-3 text-neutral-400">
          <li><a href="#">Register</a></li>
          <li><a href="#">Opportunities</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Testimonials</a></li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">
          Contact Us
        </h3>

        <div className="space-y-3 text-neutral-400">
          <p className='flex items-center justify-center gap-1 w-fit'><MapPin size={15}/>  New Delhi, India</p>
          <p className='flex items-center justify-center gap-1 w-fit'><Mail size={15}/> vivek.patel.1057@gmail.com</p>
          <p className='flex items-center justify-center gap-1 w-fit'><Phone size={15}/>  +91 8595818416</p>
        </div>
      </div>

    </div>

    <div className="border-t border-neutral-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-neutral-500 text-sm">
        © 2026 Vivek Patel. All rights reserved.
      </p>

      <p className="text-neutral-500 text-sm mt-3 md:mt-0">
        Made with ❤️ by Vivek Patel
      </p>
    </div>
  </div>
</footer>
  )
}

export default Footer