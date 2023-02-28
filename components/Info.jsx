const Info = () => {
    return (
        <div className="flex flex-col py-8 justify-center items-center gap-y-12 bg-gray-900 text-gray-200 w-screen px-60 text-center">
            <div className="text-2xl font-bold">
                GBPEC ALUMNI ASSOCIATION PLATFORM
            </div>

            <div className='flex justify-center items-center gap-x-12'>
                <div className='flex flex-col items-center justify-center gap-y-6'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </div>

                    <div className='font-bold'>YOUR ALUMNI PROFILE</div>
                    <div className='text-sm'>Create & Complete your Alumni Profile & remain connected with with all opportunities matching your interest</div>
                </div>

                <div className='flex flex-col items-center justify-center gap-y-6'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2Z"/>
                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783.059-.187.09-.386.09-.593V4a2 2 0 0 0-2-2H2Z"/>
                        </svg>
                    </div>

                    <div className='font-bold'>YOUR BATCHMATES</div>
                    <div className='text-sm'>View Our Exclusive Batchmates Directory to know about whereabouts of your batchmates</div>
                </div>

                <div className='flex flex-col items-center justify-center gap-y-6'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                    </div>

                    <div className='font-bold'>ALUMNI IN YOUR CITY</div>
                    <div className='text-sm'>Find Aumni living in your city & be a part of meetups in your cities</div>
                </div>

                <div className='flex flex-col items-center justify-center gap-y-6'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                        </svg>
                    </div>

                    <div className='font-bold'>ALUMNI DIRECTORY</div>
                    <div className='text-sm'>Explore Complete Alumni Directory & connect with alumni with your Interests & Domain</div>
                </div>
            </div>
        </div>
    )
}

export default Info