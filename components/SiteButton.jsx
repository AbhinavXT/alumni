import React from 'react'

const SiteButton = ({ text, count }) => {
  return (
    <div className='siteButtonMain'>
        <div className='siteButtonText'>{text}</div>
        <div className='text-right'>{count}</div>
    </div>
  )
}

export default SiteButton