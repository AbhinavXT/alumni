import React from 'react'

const SearchButton = ({ expanded, text }) => {
    return (
        <div className='flex justify-between py-4 px-6 w-84 bg-gray-300 text-lg rounded-sm cursor-pointer'>
            <div className='font-bold text-left'>{text}</div>
        </div>
    )
}

export default SearchButton