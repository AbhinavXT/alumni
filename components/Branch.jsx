import React from 'react'
import Link from 'next/link'

const Branch = ({ branch, memberNum }) => {
  return (
    <Link href='/branch'>
      <div className='flex flex-col items-center justify-center gap-y-2 py-8 px-16 shadow-lg rounded-md cursor-pointer bg-gray-100 hover:scale-105 ease-in duration-500'>
        <div className='font-bold'>{branch}</div>
        <div className='text-gray-800'>{memberNum} Member</div>
      </div>
    </Link>
  )
}

export default Branch