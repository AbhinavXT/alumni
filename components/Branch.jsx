import React from 'react'
import Link from 'next/link'

const Branch = ({ branch, memberNum, batch }) => {
    return (
        <Link
            href={{
                pathname: '/yearbook/[batch]/[branch]',
                query: { branch: branch, batch: batch }
            }}
        >
            <div className='branchMain'>
                <div className='font-bold'>{branch}</div>
                <div className='text-gray-800'>{memberNum} Member</div>
            </div>
        </Link>
    )
}

export default Branch