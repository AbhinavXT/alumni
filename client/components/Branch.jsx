import React from 'react'
import Link from 'next/link'

const Branch = ({ branchData, branch, batch }) => {
    return (
        <Link
            href={{
                pathname: '/yearbook/[batch]/[branch]',
                query: { branch: branch, batch: batch }
            }}
        >
            <div className='branchMain'>
                <div className='font-bold text-sm'>{branch}</div>
                {branchData[branch] &&
                    <div className='text-gray-800'>{branchData[branch].length} Member</div>
                }
            </div>
        </Link>
    )
}

export default Branch