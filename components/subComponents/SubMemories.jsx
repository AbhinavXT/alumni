import Image from 'next/image'

const SubMemories = () => {
  return (
    <div className="h-80 w-[379px] shadow-lg text-justify">
        <div className="flex flex-col justify-center items-center h-2/5">
            <Image
                src="/i1.png"
                alt="Picture of the college"
                width={379}
                height={306}
            />
        </div>
        <div className='p-2 flex flex-col gap-y-3'>
            <div className='text-xs flex gap-x-1'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                </div>
                <div>
                    Oct 08, 2020
                </div>
            </div>
            <div className='font-bold'>
                A Request to joined Alumni Members in Portal
            </div>
            <div className='text-sm'>
                Dear Alumni Members, It is observed that number of alumni registered in this alumni portal is constant now. we are around 3000 members of Alumni Association.
            </div>
            <div className='flex justify-between pt-2'>
                <div className='text-xs flex gap-x-1'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>
                    </div>
                    <div>
                        189
                    </div>
                </div>
                <a className='text-[#00004F] cursor-pointer'>View More</a>
            </div>
        </div>
    </div>
  )
}

export default SubMemories