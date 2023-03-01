import React from 'react'
import Link from 'next/link'

const Year = ({ batch, memberNum }) => {
  	return (
  	  	<Link href='/branches'>
  	  	  	<div className='yearMain'>
  	  	  	  	<div className='font-bold'>Class of {batch}</div>
  	  	  	  	<div className='text-gray-800'>{memberNum} Member</div>
  	  	  	</div>
  	  	</Link>
  	)
}

export default Year