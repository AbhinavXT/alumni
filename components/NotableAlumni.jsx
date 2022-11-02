import Image from 'next/image'

const NotableAlumni = () => {
    return (
        <div className="flex flex-col py-12 justify-center items-center gap-y-8">
            <div className="text-3xl font-extrabold">Notable Alumni</div>
            <div className="h-80 w-[379px] bg-[#00004F] shadow-lg hover:scale-105 ease-in duration-500">
                <div className="flex flex-col justify-center items-center h-1/2">
                    <Image
                        src="/i2.webp"
                        className='rounded-full'
                        alt="Picture of the college"
                        width={120}
                        height={120}
                    />
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-200 h-1/2 w-full">
                    Founder Batch of GBPIET (GBPEC 1995)
                </div>
            </div>
        </div>
    )
}

export default NotableAlumni