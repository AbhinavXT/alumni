import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col gap-y-12 px-20 py-12'>
            <div className='flex flex-col gap-y-3'>
                <div className='font-bold text-2xl'>About</div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus 
                    aliquam maiores aspernatur tempora incidunt esse minima nisi sapiente pariatur 
                    explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae 
                    consequuntur libero sit laborum. Quaerat mollitia quam atque doloremque dolorem.
                </div>
            </div>
            <div className='flex flex-col gap-y-8'>
                <div className='font-bold text-2xl'>Contact</div>
                <div className='flex flex-col gap-y-6'>
                    <div className='flex items-center justify-between gap-x-20'>
                        <div className='font-bold'>Email</div>
                        <a href='/' className='text-blue-700 hover:underline'>abcxyz@gmail.com</a>
                    </div>
                    <div className='flex items-center justify-between gap-x-20'>
                        <div className='font-bold'>Linkedin</div>
                        <a href='/' className='text-blue-700 hover:underline'>linkedin.com/in/abcxyz/</a>
                    </div>
                    <div className='flex items-center justify-between gap-x-20'>
                        <div className='font-bold'>Mobile No.</div>
                        <div className='text-blue-700 hover:underline'>123456789</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About