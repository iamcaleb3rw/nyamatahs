import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='p-4 flex justify-between border border-t'>
        <h1>Copyright © <br /> Nyamata HS</h1>
        <h1>Built by <Link href="https://instagram.com/iamcaleb3rw" target='_blank' className='underline text-purple-500'>Caleb Ganza</Link></h1>
    </div>
  )
}

export default Footer