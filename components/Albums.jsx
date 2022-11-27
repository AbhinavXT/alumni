import Image from 'next/image'
import Link from 'next/link'

const Albums = () => {
    return (
        <Link href='/gallary'>
            <div className="flex flex-col py-8 justify-center items-center gap-y-8 bg-gray-300 w-screen px-40 text-center cursor-pointer">
                <div className="text-3xl font-extrabold">Albums</div>

                <div className="h-80 w-96 shadow-lg hover:scale-105 ease-in duration-500">
                    <div className="flex flex-col justify-center items-center h-5/6">
                        <Image
                            src="/g1.jpg"
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
        </Link>
    )
}

export default Albums
