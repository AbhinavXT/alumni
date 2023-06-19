import Head from "next/head"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react'

import { useSession } from 'next-auth/react'
import FeedElement from "../components/FeedElement"

import feedPosts from '../data/feed.json'

const feed = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [user, setUser] = useState(null)

    const { data: session, status } = useSession()

    const router = useRouter()

    const handleSession = async() => {
        const session = await getSession()
        
        if(session)
            setUser(session.user.email)
    }

    const handleChange = event => {
        setSearchTerm(event.target.value)
    }

    const handleClick = () => {
        if(status !== 'authenticated')
            alert('Please login or signup before posting')
        else {
            router.push('/feedForm')
        }
    }

    const getPosts = () => {
        const data = localStorage.getItem("feedPost")

        console.log(JSON.parse(data))

        console.log(user)

        if(data !== null) {
            if(user === 'abhinavpathaka17@gmail.com' || user === 'skv176@gmail.com' || user === null) {
                const newPost = JSON.parse(data)
            
                feedPosts.push(newPost)
            }
        }
    }
    
    useEffect(() => {
        handleSession()
        getPosts()
    }, [])

    useEffect(() => {
        const results = feedPosts.filter((feed) =>
            feed.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);

    }, [searchTerm]);

    return (
        <div className="feedMain">
            <Head>
                <title>GBPEC CampusFeed</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <div className="feedList">
                <div className='feedListForm'>
                    <form action="submit">
                        <input className="feedListFormInput" id="title" type="text" placeholder="Search by title..." />
                    </form>
                    <button className="bg-[#1d3557] p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
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
            </div> */}
            <div className='eventListSearch'>
                <form action="submit">
                    <input 
                        className="eventListSearchInput" 
                        id="title" 
                        type="text" 
                        placeholder="Search by title..." 
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </form>

                <button className="eventListSearchButton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
            </div>

            <button
                onClick={handleClick}
                className="noticeboardGridHeader"
            >
                + Add a feed post
            </button>

            <div className="flex flex-col gap-y-6">
                {searchResults.map((feedElement, index) => {
                    return (
                        <FeedElement
                            key={index}
                            date={feedElement.date}
                            title={feedElement.title}
                            text={feedElement.text}
                            feedNum={index}
                        />
                    )
                })}
                <div className="feedListEnd">You have reached the end!</div>
            </div>
        </div>
    )
}

export default feed