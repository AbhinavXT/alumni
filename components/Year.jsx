import React from 'react'
import Link from 'next/link'

const Year = ({ batch, memberNum }) => {
  return (
    <Link href='/branches'>
      <div className='flex flex-col items-center justify-center gap-y-2 py-8 px-12 shadow-lg rounded-md cursor-pointer bg-gray-100'>
        <div className='font-bold'>Class of {batch}</div>
        <div className='text-gray-800'>{memberNum} Member</div>
      </div>
    </Link>
  )
}

export default Year