import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import SiteButton from "../components/SiteButton"

const galleries = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)    

    return (
        <div className="galleriesMain">
            <div className="galleriesOuterDiv">
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

                    <div className={`${dropdownOpen ? "hidden" : "galleriesDropdown"}`}>
                        <a href='/galleries' className='galleriesDropdownMenu'>
                            <div>Alumni Stories</div>
                        </a>
                        <a href='/careers' className='galleriesDropdownMenu'>
                            <div>Institute Updates</div>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col gap-y-8">
                <div className="gallarierNumber">1 gallay to display!</div>
                
                <div className="galleriesImageOuterDiv">
                    <Link href='/gallary'>
                        <Image
                            src="/i2.webp"
                            className="rounded-lg cursor-pointer"
                            alt="Picture of the college"
                            width={300}
                            height={250}
                        />
                    </Link>

                    <div className="galleriesImageText">
                        <div className="font-bold">An Old Memories</div>
                        <div>6 Items</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default galleries