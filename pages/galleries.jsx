import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import SiteButton from "../components/SiteButton"

const galleries = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)    

    return (
        <div className="flex justify-center gap-x-12 -mt-48">
            <div className="flex flex-col gap-y-12 font-bold">
                <div className="text-2xl font-light">GALLERY CATEGORIES</div>
                <div className="flex flex-col gap-y-4">
                    <SiteButton text='All ' count='1' />
                    <SiteButton text='Created by me' count='0' />
                        
                    <button className="relative" onClick={() =>
                        dropdownOpen
                            ? setDropdownOpen(false)
                            : setDropdownOpen(true)
                    }>
                        <SiteButton text='Categories' count='0' />
                    </button>

                    <div className={`${dropdownOpen ? "hidden" : "absolute flex flex-col gap-y-4 mt-60"}`}>
                        <a href='/galleries' className='bg-gray-200 px-4 text-gray-600'>
                            <div>Alumni Stories</div>
                        </a>
                        <a href='/careers' className='bg-gray-200 px-4 text-gray-600'>
                            <div>Institute Updates</div>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col gap-y-8">
                <div className="flex justify-center items-center bg-gray-300 px-64 py-4 h-12 rounded-sm mt-1">1 gallay to display!</div>
                
                <div className="flex flex-col gap-y-2 w-72">
                    <Link href='/gallary'>
                        <Image
                            src="/i2.webp"
                            className="rounded-lg cursor-pointer"
                            alt="Picture of the college"
                            width={300}
                            height={250}
                        />
                    </Link>

                    <div className="flex justify-between items-center">
                        <div className="font-bold">An Old Memories</div>
                        <div>6 Items</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default galleries