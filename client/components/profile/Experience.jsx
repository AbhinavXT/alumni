import React from 'react'

const Experience = (props) => {
    return (
        <div className='flex flex-col gap-y-12 px-20 py-12'>
            <div className='font-bold text-2xl'>Experience</div>
            {props.org ? (
                <div className='flex flex-col gap-y-1'>
                    <div className='flex justify-between'>
                        <div className='text-xl font-bold'>{props.org}</div>
                    </div>

                    <div className='flex justify-between'>
                        <div className='italic'>{props.brief}</div>
                        <div className='flex italic gap-x-1'>
                            <div>{props.end} - </div>
                            <div>{Number(props.end) + Number(props.exp)}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>---</div>
            )}
        </div>
    )
}

export default Experience