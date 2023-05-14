import Head from "next/head"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import SiteButton from "../components/SiteButton"

const galleries = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)    

    return (
        <div className="galleriesMain">
            <Head>
                <title>GBPEC Gallary</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <div className="galleriesOuterDiv">
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
            </div> */}

            <div className='eventListSearch'>
                <form action="submit">
                    <input className="eventListSearchInput" id="username" type="text" placeholder="Search by title..." />
                </form>
                <button className="eventListSearchButton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
            </div>

            
            <div className="flex flex-col gap-y-8">
                <div className="gallariesNumber">1 gallay to display</div>
                
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