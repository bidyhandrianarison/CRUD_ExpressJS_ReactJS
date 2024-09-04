import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <div className=''>
      <div>
        <div className='p-2 rounded-lg bg-green-600 text-white font-medium w-max'>
          <Link to='/useradd'>Add +</Link>
        </div>
      </div>
    </div>
  )
}
