import Head from "next/head"

import { useState } from "react"
import SiteButton from "../components/SiteButton"

const events = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)  

    return (
        <div className="eventsMain">
            <Head>
                <title>Campus Events</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="eventsList">
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
                <div className="eventListMainHeading">EVENT CATEGORIES</div>
                <div className="eventListContent">
                    <SiteButton text='All Events' count='0' />
                    <SiteButton text='Past Events' count='0' />
                    <SiteButton text='Upcoming Events' count='0' />
                    <SiteButton text='Attended by me' count='0' />
                    

                    <button className="relative" onClick={() =>
                        dropdownOpen
                            ? setDropdownOpen(false)
                            : setDropdownOpen(true)
                    }>
                        <SiteButton text='Categories' count='2' />
                    </button>
                            
                    <div className={`${dropdownOpen ? "hidden" : "flex flex-col gap-y-4"}`}>
                        <a href='/events' className='eventListCategoryDorpdown'>
                            <div>Alumni Stories</div>
                        </a>
                        
                        <a href='/events' className='eventListCategoryDorpdown'>
                            <div>Institute Updates</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="events">No more events to display!</div>
        </div>
    )
}

export default events