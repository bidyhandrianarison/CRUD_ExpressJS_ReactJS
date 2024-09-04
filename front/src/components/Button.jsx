import React from 'react'

export default function Button({text,color}) {
  return (
    <div className='p-2 bg-blue-700 w-max rounded-sm'>
        <button type='submit' className='font-bold'>{text}</button>
    </div>
  )
}
