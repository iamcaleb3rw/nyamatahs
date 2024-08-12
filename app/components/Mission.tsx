import React from 'react'

function Mission() {
  return (
    <div className='min-h-[80vh] text-white bg-slate-950 rounded-xl mb-40' id='about'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='p-6 text-center'>
                <h1 className='text-xl p-3 underline font-bold'>Combinations</h1>
                <div className='text-left gap-2 flex flex-col'>
                    <p className='text-lg border rounded-xl p-3'>MPC</p>
                    <p className='text-lg border rounded-xl p-3'>PCM</p>
                    <p className='text-lg border rounded-xl p-3'>MPG</p>
                    <p className='text-lg border rounded-xl p-3'>PCB</p>
                    <p className='text-lg border rounded-xl p-3'>MCB</p>
                    <p className='text-lg border rounded-xl p-3'>MEC</p>
                    <p className='text-lg border rounded-xl p-3'>HEG</p>
                </div>
            </div>
            <div className='border min-h-[80vh]'>
                <div className='p-6 border h-[50%]'>
                    <h1 className='text-xl font-bold text-center underline mb-4'>Mission</h1>
                    <p>our mission is to provide a nurturing and inclusive learning environment that empowers students to achieve academic excellence, develop critical thinking, and foster a sense of social responsibility.</p>
                </div>
                <div className='border h-[50%] p-6'>
                    <h1 className='text-xl font-bold underline text-center mb-4'>Values</h1>
                    <p>Our vision is to be a leading educational institution recognized for inspiring and cultivating future leaders who are knowledgeable, innovative, and ethical. Nyamata High School aspires to create a culture of lifelong learning, where students are encouraged to pursue their passions, embrace diversity, and make meaningful contributions to society.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mission