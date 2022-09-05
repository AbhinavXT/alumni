import Image from 'next/image'

const signup = () => {
  return (
    <div className='flex flex-col justify-center -mt-12 gp-y-20 mb-24'>
        <div className='bg-gray-900 text-gray-200 text-3xl font-semibold py-20 pl-32'>Signup / Login</div>
        
        <div className='flex mt-16 justify-center bg-gray-100 py-12 mx-auto divide-x divide-gray-400 rounded shadow-lg'>
            <div className='flex flex-col items-center justify-center gap-y-8 px-12 text-center'>
                <div>
                    <Image
                        src="/gbpec.jpg"
                        alt="Picture of the college logo"
                        width={120}
                        height={120}
                    />
                </div>
                
                <div className='text-2xl font-light'>Alumni Association of <div>G. B Pant Institute of <div>Engineering & Technology</div></div></div>
                
                <div className='font-light'>Sign up or log in to stay <div>connected with your community</div></div>
            </div>
        
            <div className='flex flex-col items-center justify-center gap-y-8 px-12'>
                <div className='text-lg font-light'>Choose any one of the following to Signup/Login</div>
                <div className='flex flex-col gap-y-4'>
                    <button className='text-center py-2 px-12 bg-[#365899] rounded text-gray-200'>Connnect with LinkedIn</button>
                    <button className='text-center py-2 px-12 bg-[#E53935] rounded text-gray-200'>Connnect with Gmail</button>
                    <button className='text-center py-2 px-12 bg-[#039BE5] rounded text-gray-200'>Connnect with Twitter</button>
                </div>
                <div className='bg-gray-900 text-gray-200 rounded-full p-2'>OR</div>
                <div className='flex gap-x-4 items-center justify-center'>
                    <form action="submit">
                        <input className="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your email" />
                    </form>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                        </svg>
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default signup