"use client"
import Events from '@/components/custom/Events'
import Footer from '@/components/custom/Footer'
import Hero from '@/components/custom/Hero'
import Impact from '@/components/custom/Impact'
import Navbar from '@/components/custom/Navbar'
import React from 'react'

function Home() {
  return (
    <div className=' min-h-screen w-screen relative bg-cover'>
      <Navbar/>
      <Hero/>
      <Impact/>
      <Events/>
      <Footer/> 
      
    </div>
  )
}

export default Home