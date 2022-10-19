import Image from 'next/image'

const Contact = () => {
    return (
        <div className="flex flex-col py-8 items-center gap-y-8 w-screen px-40">
            <div className="text-3xl font-extrabold text-gray-200 bg-[#00004F] w-screen py-16 text-center">Contact</div>
            
            <div className='flex gap-x-12 z-10 -mt-16'>
                <div className='flex flex-col gap-y-6'>
                    <div className='flex flex-col px-8 h-[408px] w-[397px] bg-gray-200 shadow-lg justify-center gap-y-3'>
                        <div className='text-2xl'>Contact Info</div>
                        <div className='text-gray-500 font-light'>Pauri-Garhwal</div>
                        <div className='text-gray-500 font-light'>Uttarakhand-246194</div>
                        <div className='flex gap-x-2 text-gray-500 font-light items-center'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                </svg>
                            </div>
                            <div>
                                01368-228030
                            </div>
                        </div>
                        <div className='flex gap-x-2 text-gray-500 font-light items-center'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link" viewBox="0 0 16 16">
                                    <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                                    <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                                </svg>
                            </div>
                            <a href='www.gbpec.ac.in' className='text-[#00004F]'>
                                www.gbpec.ac.in
                            </a>    
                        </div>
                        <div className='flex gap-x-2 text-gray-500 font-light items-center'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                </svg>
                            </div>
                            <div>
                                alumnigbpiet@gmail.com principalgbpecpauri@gmail.com 
                            </div>
                        </div>

                        <div className='pt-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg>
                        </div>
                    </div>
                    
                    <div className='flex flex-col px-8 h-[550px] w-[397px] bg-gray-200 shadow-lg divide-y-2 divide-gray-300'>
                        <div className='flex items-center justify-center text-3xl font-light py-4'>Reach Out</div>
                        
                        <div className='px-8 py-8'>
                            <form action="submit" className='flex flex-col gap-y-6'>
                                <div className='flex flex-col gap-y-1'>
                                    <label htmlFor="username">
                                        Your Name *
                                    </label>
                                    <input className="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                                </div>

                                <div className='flex flex-col gap-y-1'>
                                    <label htmlFor="username">
                                        Your Email *
                                    </label>
                                    <input className="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                                </div>
                                
                                <div className='flex flex-col gap-y-1'>
                                    <label htmlFor="username">
                                        Phone No.
                                    </label>
                                    <input className="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="Phone" />
                                </div>

                                <div className='flex flex-col gap-y-1'>
                                    <label htmlFor="username">
                                        Your Message *
                                    </label>
                                    <input className="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" placeholder="Message" />
                                </div>

                                <button className='flex py-2 px-6 bg-[#00004F] w-24 rounded-md text-gray-200'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-200 shadow-lg w-[700px]'>
                    {/* <Image
                        src="/m1.png"
                        alt="Picture of the map"
                        width={600}
                        height={950}
                    /> */}

                    <img src="/m1.png" alt="Picture of the map" className='w-full h-full'/>
                </div>
            </div>
        </div>
    )
}

export default Contact