"Use client"
import Link from 'next/link'
import React from 'react'

function Hero() {
  const scrollToImpact = () => {
  document
    .getElementById("events-e6d7sj")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
};
  return (
    <div className='bg-[url(/Hero.jpg)] w-screen h-[95vh] bg-cover bg-center'>
      <div className='w-full h-full flex items-center justify-center flex-col bg-linear-to-r gap-2 pt-20 md:pt-10 text-white from-black/80 to-black/10'>

      <h1 className='text-4xl md:text-6xl  text-center font-semibold'>Be the <span className='text-amber-400 font-bold'>Change.</span></h1>
      <h1 className='text-xl md:text-3xl text-center'> Volunteer for a Better Tomorrow.</h1>

      <p className='md:w-1/2 w-3/4 text-center my-8 text-sm '>Every hour you give can <span className='text-amber-400'>transform</span> lives.<br/> 
      Connect with meaningful causes, collaborate with passionate people,<br/> and make your contribution count.</p>

      <div className='flex flex-col md:flex-row items-center justify-center gap-6'>

        <Link href="/register" className='bg-amber-400 border border-amber-400 text-black cursor-pointer w-50 grid place-items-center p-2 md:px-4 md:py-3'>Become a Volunteer</Link>
        <button onClick={scrollToImpact} className='bg-neutral-200 border border-neutral-200 text-black  w-50 grid place-items-center cursor-pointer p-2 md:px-4 md:py-3'>Explore Opportunities</button>
      </div>
      </div>
    </div>
  )
}

export default Hero