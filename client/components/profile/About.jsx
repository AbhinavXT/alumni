import React from 'react'

const About = (props) => {
    return (
        <div className='flex flex-col gap-y-12 px-20 py-12'>
            <div className='flex flex-col gap-y-3'>
                <div className='font-bold text-2xl'>About</div>
                <div>
                    {props.brief ? props.brief + 'at' + props.org : "---"} 
                </div>
            </div>
            <div className='flex flex-col gap-y-8'>
                <div className='font-bold text-2xl'>Contact</div>
                <div className='flex flex-col gap-y-6'>
                    <div className='flex items-center justify-between gap-x-20'>
                        <div className='font-bold'>Email</div>
                        <a href='/' className='text-blue-700 hover:underline'>{props.email ? props.email : "---"}</a>
                    </div>
                    <div className='flex items-center justify-between gap-x-20'>
                        <div className='font-bold'>Mobile No.</div>
                        <div className='text-blue-700 hover:underline'>{props.mobile ? props.mobile : "---"}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About