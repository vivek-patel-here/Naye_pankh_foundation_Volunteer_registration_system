"use client";

import Link from "next/link";
import { useState } from "react";
import useStore from "../storeContext";
import { Loader, Loader2 } from "lucide-react";

export default function VolunteerForm() {
  const { server_url ,successToast,errorToast} = useStore();
  const initialState = {
    fullname: "",
    email: "",
    phoneNumber: "",
    age: "",
    gender: "",
    skills: "",
    availability: "",
    address: "",
    motivation: "",
    emergencyContact: "",
  };

  const [volunteer, setVolunteer] = useState<typeof initialState>(initialState);

  const handleChange = (e: any) => {
    setVolunteer((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };



  const [loading, setLoading] = useState(false);

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    for(const key of Object.keys(volunteer) as Array<keyof typeof volunteer>){
      if(!volunteer[key]?.trim()) return errorToast(`Please complete all required fields.`);
    }

    try {
      setLoading(true);
      const response = await fetch(
        `${server_url}/api/volunteer/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...volunteer,
            skills: volunteer.skills
              .split(",")
              .map((skill) => skill.trim())
              .filter(Boolean),
          }),
        }
      );

      const parsedResp = await response.json();

      if (!response.ok) {
        throw new Error(
          parsedResp.message || "Failed to register volunteer"
        );
      }

      successToast(parsedResp.message || "Volunteer registered successfully!");
      setVolunteer(initialState);
    } catch (error: any) {
      errorToast(error.message || "Something went wrong");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[url('/cover.jpg')] bg-cover bg-center flex text-xs">
      {/* Left Side */}
      <div className="w-1/2 bg-white flex justify-center items-center py-10">
        <form onSubmit={handleSubmit} className="w-137.5 bg-white shadow-2xl rounded-2xl p-10 flex flex-col gap-5">
          {/* Logo */}
          <Link href={"/"}>
            <div className="flex items-center gap-3 justify-center">
              <img
                src="/Logo.png"
                alt="Logo"
                className="w-12 h-12"
              />

              <div>
                <h1 className="font-bold text-xl">
                  NayePankh
                </h1>
                <p className="text-sm text-gray-500">
                  Foundation
                </p>
              </div>
            </div>
          </Link>

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Become a <span className="text-amber-400">Volunteer</span>
            </h2>

            <p className="text-gray-500 mt-2">
              Join our mission and help create a positive impact.
            </p>
          </div>
          <div>
            <label className="block mb-2 font-medium">
              Full Name *
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              name="fullname"
              value={volunteer.fullname}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">
              Email *
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={volunteer.email}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium">
              Phone Number *
            </label>

            <input
              type="tel"
              placeholder="Enter phone number"
              name="phoneNumber"
              value={volunteer.phoneNumber}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Age & Gender */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">
                Age *
              </label>

              <input
                type="number"
                placeholder="Age"
                name="age"
                value={volunteer.age}
                onChange={handleChange}
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Gender *
              </label>

              <select
                name="gender"
                value={volunteer.gender}
                onChange={handleChange}
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block mb-2 font-medium">
              Skills *
            </label>

            <input
              type="text"
              name="skills"
              value={volunteer.skills}
              onChange={handleChange}
              placeholder="Teaching, Event Management, First Aid..."
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Availability */}
          <div>
            <label className="block mb-2 font-medium">
              Availability *
            </label>

            <select
              name="availability"
              value={volunteer.availability}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option>Select Availability</option>
              <option>Weekdays</option>
              <option>Weekends</option>
              <option>Both</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 font-medium">
              Address *
            </label>

            <textarea
              rows={3}
              name="address"
              value={volunteer.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Motivation */}
          <div>
            <label className="block mb-2 font-medium">
              Why do you want to volunteer?
            </label>

            <textarea
              rows={3}
              name="motivation"
              value={volunteer.motivation}
              onChange={handleChange}
              placeholder="Tell us about your motivation..."
              className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Emergency Contact */}
          <div>
            <label className="block mb-2 font-medium">
              Emergency Contact *
            </label>

            <input
              type="tel"
              name="emergencyContact"
              value={volunteer.emergencyContact}
              onChange={handleChange}
              placeholder="Emergency phone number"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-400 grid place-items-center transition py-3 rounded-lg  text-sm cursor-pointer"
          >
           {
            loading ?  <Loader2 className="animate-spin"/> :<p>Register Now</p>
           } 
           
            
          </button>
        </form>
      </div>

      {/* Right Side */}
      <div className="w-1/2 relative ">
        <div className="absolute inset-0 bg-black/40" />

        <div className="mt-20 inset-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-6xl font-bold">500+</h2>
          <p className="text-xl">Active Volunteers</p>

          <h2 className="text-6xl font-bold mt-10">50+</h2>
          <p className="text-xl">Community Events</p>

          <h2 className="text-6xl font-bold mt-10">10K+</h2>
          <p className="text-xl">Hours Contributed</p>
        </div>
      </div>
    </div>
  );
}