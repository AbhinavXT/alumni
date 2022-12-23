import React from 'react'

const Notice = (props) => {
  return (
    <div className='flex flex-col divide-y gap-y-2 divide-gray-500 bg-gray-100 px-4 py-4 shadow-lg hover:scale-[1.02] ease-in duration-500'>
        <div>
            <span className='text-[#F13617] font-bold'>
                {props.owner} {' '}
            </span>
            posted an opportunity
        </div>
        
        <div className='flex flex-col gap-y-2'>
            <div className='flex justify-between py-4'>
                <div className='font-light'>
                    <span className='font-bold text-lg'>
                        {props.title} {' '}
                    </span>
                    | {props.company}
                </div>
                <div className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00004F" className="bi bi-share-fill" viewBox="0 0 16 16">
                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                    </svg>
                </div>
            </div>

            <div className='flex justify-between items-center gap-x-6'>
                <div>
                    <div className='font-bold text-gray-600'>Location</div>
                    <div className='font-light text-sm'>{props.location}</div>
                </div>
                <div>
                    <div className='font-bold text-gray-600'>Deadline</div>
                    <div className='font-light text-sm'>Apply by: {props.deadline}</div>
                </div>
                <div>
                    <div className='font-bold text-gray-600'>Salary</div>
                    <div className='font-light text-sm'>{props.salary}</div>
                </div>
                <div>
                    <div className='font-bold text-gray-600'>Applications</div>
                    <div className='font-light text-sm'>{props.applications} applied</div>
                </div>
            </div>
            
            <div className='px-4 py-1 bg-blue-100 text-sm w-fit rounded-full my-2'>{props.type}</div>
            
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-x-2'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </div>
                    <div className='text-sm'>
                        <div className='font-bold'>Shivam Ramola</div>
                        <div className='font-light'>Published On {props.published}</div>
                    </div>
                </div>

                <div className='flex gap-x-4'>
                    <button className='px-2 py-1 border-2 border-[#00004F]'>View Job Post</button>
                    <button className='px-4 py-1 bg-[#00004F] text-gray-200'>Apply</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notice