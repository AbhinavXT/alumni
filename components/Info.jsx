import Image from 'next/image'

const Info = () => {
  return (
    <div className="flex flex-col py-8 justify-center items-center gap-y-8 bg-gray-900 text-gray-200 w-screen px-40 text-center">
        <div className="text-2xl font-bold">
            GBPEC ALUMNI ASSOCIATION PLATFORM
        </div>
        
        <div className='flex justify-center items-center gap-x-8'>
            <div className='flex flex-col items-center justify-center gap-y-6'>
                <div>
                    <Image
                        src="/c4.jpg"
                        className='rounded-full'
                        alt="Picture of the college"
                        width={100}
                        height={100}
                    />
                </div>
                <div className='font-bold'>YOUR ALUMNI PROFILE</div>
                <div className='text-sm'>Create & Complete your Alumni Profile & remain connected with with all opportunities matching your interest</div>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-6'>
                <div>
                    <Image
                        src="/c4.jpg"
                        className='rounded-full'
                        alt="Picture of the college"
                        width={100}
                        height={100}
                    />
                </div>
                <div className='font-bold'>YOUR ALUMNI PROFILE</div>
                <div className='text-sm'>Create & Complete your Alumni Profile & remain connected with with all opportunities matching your interest</div>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-6'>
                <div>
                    <Image
                        src="/c4.jpg"
                        className='rounded-full'
                        alt="Picture of the college"
                        width={100}
                        height={100}
                    />
                </div>
                <div className='font-bold'>YOUR ALUMNI PROFILE</div>
                <div className='text-sm'>Create & Complete your Alumni Profile & remain connected with with all opportunities matching your interest</div>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-6'>
                <div>
                    <Image
                        src="/c4.jpg"
                        className='rounded-full'
                        alt="Picture of the college"
                        width={100}
                        height={100}
                    />
                </div>
                <div className='font-bold'>YOUR ALUMNI PROFILE</div>
                <div className='text-sm'>Create & Complete your Alumni Profile & remain connected with with all opportunities matching your interest</div>
            </div>
        </div>
    </div>
  )
}

export default Info