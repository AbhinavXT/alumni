import React from 'react'

const Education = () => {
    return (
        <div className='flex flex-col gap-y-12 px-20 py-12'>
            <div className='font-bold text-2xl'>Education</div>
            <div className='flex flex-col gap-y-1'>
                <div className='flex justify-between'>
                    <div className='text-xl font-bold'>GB Pant Institute of Engineering and Technology</div>
                </div>
                
                <div className='flex justify-between'>
                    <div className='italic'>B.Tech Computer Science and Engineering</div>
                    <div className='italic'>2019-2023</div>
                </div>
            </div>

            <div className='flex flex-col gap-y-1'>
                <div className='flex justify-between'>
                    <div className='text-xl font-bold'>XYZ School</div>
                </div>
                
                <div className='flex justify-between'>
                    <div className='italic'>Senior Secondry Certificate</div>
                    <div className='italic'>2019</div>
                </div>
            </div>
        </div>
    )
}

export default Education