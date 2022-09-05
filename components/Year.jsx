import React from 'react'

const Year = ({ batch, memberNum }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-2 py-8 px-16 shadow-lg rounded-md cursor-pointer'>
      <div className='font-bold'>Class of {batch}</div>
      <div className='text-gray-800'>{memberNum} Member</div>
    </div>
  )
}

export default Year