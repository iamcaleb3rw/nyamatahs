import React from 'react'
import Image from 'next/image'
import logoImage from '@/public/logo.png'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

function Navbar() {
  return (
    <div className='w-full z-10 border-b px-5 py-2 md:py-3 lg:px-9 flex justify-between items-center mb-2'>
        <div className='flex gap-2 items-center'>
            <Image src={logoImage} alt='logo' className='w-6 md:w-8'/>
            <h1 className='md:text-xl font-semibold tracking-tighter  text-primary'>Nyamata Highschool</h1>
        </div>
        <div className='items-center gap-8 hidden md:flex'>
            <div>
                <Link href="#">
                    Home
                </Link>
            </div>
            <div>
                <Link href="#contact">
                    Contact
                </Link>
            </div>
            <div>
                <Link href="#about">
                    About
                </Link>
            </div>
            <div>
                <Button className='flex gap-2'>
                    Babyeyi
                    <Download size={15}/>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar