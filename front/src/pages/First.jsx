import React from 'react'
import Navbar from '../components/Navbar'
import Lists from '../components/Lists'

export default function First() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#191919]'>
      <div className='flex flex-col rounded-md p-4 bg-[#FAF7F0] '>
        <Navbar />
        <Lists />
      </div>
    </div>
  )
}
