import { useState } from 'react'
import moment from 'moment'

const SubRequest = ({ request }) => {
    const [accept, setAccept] = useState(0)
    const [reject, setReject] = useState(0)

    const handleAccept = async() => {
        setAccept(1)
    }

    const handleReject = async() => {
        setReject(1)
    }
    
    return (
        <div 
            className={`flex px-8 py-8 shadow-lg shadow-gray-300 justify-between items-center ${accept === 1 ? `bg-green-50` : ``} ${reject === 1 ? `bg-red-50` : ``}`}
        >
            <div>{ request.owner }</div>
            <div>{ request.type }</div>
            <div>{ moment().format('MMM D YYYY') }</div>
            <a href={request.link} className='text-blue-700 underline'>link</a>
            {accept === 0 && reject === 0 && (
                <div className='flex gap-x-2 items-center'>
                    <button 
                        className='px-6 py-2 text-white rounded bg-green-700 shadow-sm shadow-green-400'
                        onClick={handleAccept}
                    >
                            Accept
                    </button>
                    <button 
                        className='px-6 py-2 text-white rounded bg-red-700 shadow-sm shadow-red-400'
                        onClick={handleReject}
                    >
                            Reject
                    </button>
                </div>
            )}
        </div>
    )
}

export default SubRequest



