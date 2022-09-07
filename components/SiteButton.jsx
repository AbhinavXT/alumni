import React from 'react'

const SiteButton = ({ text, count }) => {
  return (
    <div className='flex justify-between py-4 px-8 bg-gray-300 text-lg rounded-sm cursor-pointer'>
        <div className='font-bold text-left pr-36'>{text}</div>
        <div className='font-light text-right'>{count}</div>
    </div>
  )
}

export default SiteButton