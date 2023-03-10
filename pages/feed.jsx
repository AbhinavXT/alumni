import Head from "next/head"
import { useState } from "react"

import SiteButton from "../components/SiteButton"
import FeedElement from "../components/FeedElement"

const feed = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)    

    const feedElements = [
        {
            date: "Oct 08, 2020",
            title: "A Request to joined Alumni Members in Portal",
            text: "Dear Alumni Members, It is observed that number of alumni registered in this alumni portal is constant now. We are around 3000 members of Alumni Association..."
        },
        {
            date: "Sep 10, 2020",
            title: "JOB OPENINGS",
            text: "Dear Alumnis, Please post job opening in this thread mentioning briefly: 1. Name of company 2. Job profile 3. Eligibility Criteria/Qualification: 4...."
        },
        {
            date: "Aug 25, 2020",
            title: "Notice",
            text: "All Alumni Member of GBPIET, Thank you all. We are very much pleased to see such a wonderful response in very short time. I want to inform you that this is an..."
        }
    ]

    return (
        <div className="feedMain">
            <Head>
                <title>GBPEC CampusFeed</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="feedList">
                <div className='feedListForm'>
                    <form action="submit">
                        <input className="feedListFormInput" id="title" type="text" placeholder="Search by title..." />
                    </form>
                    <button className="bg-[#F13617] p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </div>
                <div className="text-2xl font-light">CATEGORIES</div>
                <div className="flex flex-col gap-y-4">
                    <SiteButton text='All Campusfeeds' count='3' />
                    
                    <button className="relative" onClick={() =>
                        dropdownOpen
                            ? setDropdownOpen(false)
                            : setDropdownOpen(true)
                    }>
                        <SiteButton text='Categories' count='2' />
                    </button>
                            
                    <div className={`${dropdownOpen ? "hidden" : "feedListDropdown"}`}>
                        <a href='/feed' className='feedListDropdownMenu'>
                            <div>Alumni Stories</div>
                        </a>
                        
                        <a href='/feed' className='feedListDropdownMenu'>
                            <div>Institute Updates</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-6">
                {feedElements.map((feedElement, index) => {
                    return (
                        <FeedElement
                            key={index}
                            date={feedElement.date}
                            title={feedElement.title}
                            text={feedElement.text}
                        />
                    )
                })}
                <div className="feedListEnd">You have reached the end!</div>
            </div>
        </div>
    )
}

export default feed