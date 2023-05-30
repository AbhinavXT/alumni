import React from 'react'

const Statistics = () => {
    return (
        <div className='flex flex-col gap-y-12'>
            <div className='font-bold text-2xl'>Statistics</div>
            
            <div className='flex flex-col gap-y-6 px-8'>
                <div className='flex items-center justify-between gap-x-20 font-bold'>
                    <div>Current Requests</div>
                    <div className='text-blue-700 hover:underline cursor-pointer'>1</div>
                </div>

                <div  className='flex items-center justify-between gap-x-20 font-bold'>
                    <div>Registered users</div>
                    <div className='text-blue-700 hover:underline cursor-pointer'>746</div>
                </div>

                <div className='flex items-center justify-between gap-x-20 font-bold'>
                    <div>Feed Posts</div>
                    <div className='text-blue-700 hover:underline cursor-pointer'>3</div>
                </div>

                <div className='flex items-center justify-between gap-x-20 font-bold'>
                    <div>Career Posts</div>
                    <div className='text-blue-700 hover:underline cursor-pointer'>4</div>
                </div>

                <div className='flex items-center justify-between gap-x-20 font-bold'>
                    <div>Galarries</div>
                    <div className='text-blue-700 hover:underline cursor-pointer'>1</div>
                </div>
            </div>
        </div>
    )
}

export default Statistics