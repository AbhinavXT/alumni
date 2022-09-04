import Image from 'next/image'

const Albums = () => {
    return (
        <div className="flex flex-col py-8 justify-center items-center gap-y-8 bg-gray-300 w-screen px-40 text-center">
            <div className="text-3xl font-extrabold">Albums</div>
            
            <div className="h-80 w-[379px] shadow-lg">
                <div className="flex flex-col justify-center items-center h-5/6">
                    <Image
                        src="/i2.webp"
                        alt="Picture of the college"
                        width={379}
                        height={306}
                    />
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-200 h-1/6 w-full">
                    Founder Batch of GBPIET (GBPEC 1995)
                </div>
            </div>
        </div>
    )
}

export default Albums
