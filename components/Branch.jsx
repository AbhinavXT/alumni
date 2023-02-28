import React from 'react'
import Link from 'next/link'

const Branch = ({ branch, memberNum }) => {
    return (
        <Link href='/branch'>
            <div className='branchMain'>
                <div className='font-bold'>{branch}</div>
                <div className='text-gray-800'>{memberNum} Member</div>
            </div>
        </Link>
    )
}

export default Branch