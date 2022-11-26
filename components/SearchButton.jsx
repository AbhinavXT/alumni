import React from 'react'

const SearchButton = ({ expanded, text }) => {
    return (
        <div className='flex justify-between py-4 px-8 bg-gray-300 text-lg rounded-sm cursor-pointer'>
            <div className='font-bold text-left'>{text}</div>
        </div>
    )
}

export default SearchButton