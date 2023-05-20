import React from 'react'

const Requests = () => {
    return (
        <div className='flex flex-col gap-y-12'>
            <div className='flex justify-between items-center'>
                <div className='font-bold text-2xl'>Pending Requests</div>
                <button 
                    className='font-bold text-lg px-2 py-1 border-2 border-green-500 rounded-lg bg-green-500 shadow-lg shadow-green-600'
                >
                    Accept all
                </button>
            </div>
            
            <div></div>
        </div>
    )
}

export default Requests