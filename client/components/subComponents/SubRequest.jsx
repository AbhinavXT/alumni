import { useState } from 'react'

const SubRequest = ({ name, type, date, link }) => {
    const [accept, setAccept] = useState(0)
    const [reject, setReject] = useState(0)

    return (
        <div 
            className={`flex px-8 py-8 shadow-lg shadow-gray-300 justify-between items-center ${accept === 1 ? `bg-green-50` : ``} ${reject === 1 ? `bg-red-50` : ``}`}
        >
            <div>{ name }</div>
            <div>{ type }</div>
            <div>{ date }</div>
            <a href={link} className='text-blue-700 underline'>link</a>
            {accept === 0 && reject === 0 && (
                <div className='flex gap-x-2 items-center'>
                    <button 
                        className='px-6 py-2 text-white rounded bg-green-700 shadow-sm shadow-green-400'
                        onClick={() => setAccept(1)}
                    >
                            Accept
                    </button>
                    <button 
                        className='px-6 py-2 text-white rounded bg-red-700 shadow-sm shadow-red-400'
                        onClick={() => setReject(1)}
                    >
                            Reject
                    </button>
                </div>
            )}

            <div 
                className={`text-green-700 font-bold ${accept === 0 ? `display-none` : ``}`}
            >
                Accepted
            </div>
            <div 
                className={`text-red-700 font-bold ${reject === 0 ? `display-none` : ``}`}
            >
                Rejected
            </div>
        </div>
    )
}

export default SubRequest



