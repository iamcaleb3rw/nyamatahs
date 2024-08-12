import React from 'react'
import { Instagram, Mail, MapPin, Phone, Smartphone } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

function Contact() {
  return (
    <div className='min-h-screen flex items-center justify-center flex-col' id='contact'>
        <div className='text-2xl tracking-tight font-semibold mb-3'>
          <h1>Contact</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 p-4 rounded-3xl w-full'>
            <div className='border border-r-0 rounded-[22px_0_0_22px]  p-3 bg-white'>
              <div className='flex gap-2 rounded-[10px_0_0_10px] mb-3'>
                <MapPin />
                <h1 className='text-xl text-slate-900 font-semibold'>Location</h1>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0388376320834!2d30.079502873591423!3d-2.13879063714924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c354ba6c00c68d%3A0x6d61854c6f31fb6a!2sNyamata%20High%20School!5e0!3m2!1sen!2srw!4v1723466597531!5m2!1sen!2srw"  loading="lazy" className='w-full h-[300px] rounded-[10px_10px_10px_10px] border'></iframe>
              
            </div>
            <div className='border bg-white p-3 rounded-[0_22px_22px_0]'>
                <div className='flex gap-2 mb-3'>
                  <Phone />
                  <h1 className='text-xl text-slate-900 font-semibold'>Contact Information</h1>
                </div>

                <div className='border rounded-[10px] p-3 flex flex-col gap-2'>
                  <div className='flex items-center border rounded-lg p-3 hover:bg-primary-foreground cursor-pointer transition'>
                    <Smartphone className='mr-3'/>
                    <p className='border-l-2 p-3 font-semibold'> 0788 557 658</p>
                  </div>

                  <div className='flex items-center border rounded-lg p-3 hover:bg-primary-foreground cursor-pointer transition'>
                  <Mail className="mr-3"/>
                    <p className='border-l-2 p-3 font-semibold'>nyamatahigh@gmail.com</p>
                  </div>

                  <div className='flex items-center border rounded-lg p-3 hover:bg-primary-foreground cursor-pointer transition'>
                    <Instagram className='mr-3' />
                    <p className='border-l-2 p-3 font-semibold'>@nhsrwanda</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact