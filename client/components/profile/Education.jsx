import React from 'react'

const Education = (props) => {
    return (
        <div className='flex flex-col gap-y-12 px-20 py-12'>
            <div className='font-bold text-2xl'>Education</div>
            <div className='flex flex-col gap-y-1'>
                <div className='flex justify-between'>
                    <div className='text-xl font-bold'>GB Pant Institute of Engineering and Technology</div>
                </div>
                
                <div className='flex justify-between'>
                    <div className='flex italic gap-x-1'>
                        <div>{props.course},</div>
                        <div>{props.branch}</div>
                    </div>
                    <div className='italic'>{props.start} - {props.end}</div>
                </div>
            </div>
        </div>
    )
}

export default Education