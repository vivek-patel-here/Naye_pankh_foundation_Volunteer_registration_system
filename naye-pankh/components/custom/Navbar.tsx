"use client"
import React from 'react'
import {BadgeDollarSign,UserPlus} from "lucide-react"
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='min-h-15 w-screen flex justify-around items-center z-100 text-xs fixed top-0 text-white/80 bg-linear-to-b from-black to-transparent py-6 px-1 md:px-6'>
        <div className='flex gap-2'>
            <img src="/Logo.png" className='h-10 w-10' />
            <p className='flex flex-col'>
                <span className='font-bold text-sm'>NayePankh</span>
                <span className='text-xs font-light'>Foundation</span>
            </p>
        </div>
        <div className='hover:text-white cursor-pointer font-bold md:block hidden'>Home</div>
        <div className='hover:text-white cursor-pointer font-bold md:block hidden'>About</div>
        <div className='flex flex-col items-center justify-center text-xs text-white cursor-pointer'>
            <span className='uppercase'>Voluteer</span>
            <span className='uppercase font-extrabold text-amber-400'>Registration</span>
            <span className='uppercase'>System</span>
        </div>
        <div className='hover:text-white cursor-pointer font-bold md:block hidden'>Blog</div>
        <div className='hover:text-white cursor-pointer font-bold md:block hidden'>Contact</div>
        <div className='flex items-center justify-center gap-5 '>
            <button className='border  px-3 py-2 flex items-center justify-center gap-2 bg-amber-400 border-amber-400 text-black cursor-pointer'> <BadgeDollarSign size={16}/> <span>Donate</span></button>
           <Link href="/register">
            <button className='border hidden px-3 py-2 md:flex items-center justify-center gap-2 bg-white border-white text-black cursor-pointer'> <UserPlus size={16}/> <span>Register</span></button></Link>
        </div>
    </nav>
  )
}

export default Navbar