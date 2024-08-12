import React from 'react'
import { MarqueeDemoVertical } from './MarqueeDemo'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

function Hero() {
  return (
    <div className='relative flex flex-col items-center justify-between px-9 md:flex md:flex-row text-center md:text-left'>
        <div className='max-w-[500px] flex flex-col gap-4 mb-3'>
            <h1 className=' text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-800'>Where Dreams Take Flight and Leaders Are Born</h1>
            <p className='text-slate-700 text-sm md:text-lg'>At Nyamata High School, we are committed to nurturing academic excellence, character development, and leadership skills.We have modern facilities, and rich extracurricular programs.</p>
            <div className='flex gap-3'>
                <Button className='gap-2'>Download Babyeyi <Download size={15}/></Button>
                <Button variant="outline">Contact</Button>
            </div>
        </div>
        <div>
            <MarqueeDemoVertical />
        </div>
        <div className="pointer-events-none hidden md:block absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  )
}

export default Hero