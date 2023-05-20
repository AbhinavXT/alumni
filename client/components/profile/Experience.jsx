import React from 'react'

const Experience = () => {
    return (
        <div className='flex flex-col gap-y-12 px-20 py-12'>
            <div className='font-bold text-2xl'>Experience</div>
            <div className='flex flex-col gap-y-1'>
                <div className='flex justify-between'>
                    <div className='text-xl font-bold'>XYZ Company</div>
                </div>
                
                <div className='flex justify-between'>
                    <div className='italic'>Softwae Development Engineer</div>
                    <div className='italic'>2022-current</div>
                </div>

                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium 
                    iusto quasi nam sunt impedit accusamus id nulla fuga. Debitis eos omnis 
                    temporibus laudantium odio, dolorem perferendis doloribus magnam voluptatem 
                    quae.
                </div>
            </div>

            <div className='flex flex-col gap-y-1'>
                <div className='flex justify-between'>
                    <div className='text-xl font-bold'>ABC Company</div>
                </div>
                
                <div className='flex justify-between'>
                    <div className='italic'>Software Engineeering Intern</div>
                    <div className='italic'>2019-2022</div>
                </div>

                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium 
                    iusto quasi nam sunt impedit accusamus id nulla fuga. Debitis eos omnis 
                    temporibus laudantium odio, dolorem perferendis doloribus magnam voluptatem 
                    quae.
                </div>
            </div>
        </div>
    )
}

export default Experience