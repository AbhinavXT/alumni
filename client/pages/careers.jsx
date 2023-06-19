import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import Notice from '../components/Notice'
import notices from '../data/careers.json'
import { getSession } from 'next-auth/react'

import { useSession } from 'next-auth/react'

const careers = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [user, setUser] = useState(null)

    const { data: session, status } = useSession()

    const handleSession = async() => {
        const session = await getSession()
        if(session)
            setUser(session.user.email)
    }

    const router = useRouter()

    const handleChange = event => {
        setSearchTerm(event.target.value)
    }

    const handleClick = () => {
        if(status !== 'authenticated')
            alert('Please login or signup before posting')
        else {
            router.push('/careerForm')
        }
    }

    const getPosts = () => {
        const data = localStorage.getItem("post")

        console.log(JSON.parse(data))

        if(data !== null) {
            if(user === 'abhinavpathaka17@gmail.com' || session.user.email === 'skv176@gmail.com' || user === null) {
                const newPost = JSON.parse(data)
            
                notices.push(newPost)
            }
        }

        console.log(notices)
    }

    useEffect(() => {
        handleSession()
        getPosts()
    }, [])
    
    useEffect(() => {
        const results = notices.filter((notice) =>
            notice.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);

    }, [searchTerm]);

    return (
        <div className="noticeboardMain">
            <Head>
                <title>Careers</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            

            <div className='directoryFormOuterDiv'>
                <form action="submit">
                    <input 
                        className="directoryFormInput" 
                        id="filter" 
                        type="text" 
                        placeholder="Search by title..."
                        value={searchTerm}
                        onChange={handleChange} 
                    />
                </form>
                <button className="bg-[#1D3557] p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
            </div>
        
            <div className='noticeboardGridMain'>
                {/* onClick function with to create a notice  */}
                <button 
                    onClick={handleClick}
                    className="noticeboardGridHeader"
                >
                    + Add a job post
                </button>
                <div className="noticeboardGridDiv">
                    {searchResults.map((notice, i) => {
                        return (
                            <Notice  
                                key={i}
                                owner={notice.owner}
                                title={notice.title}
                                company={notice.company}
                                location={notice.location}
                                deadline={notice.deadline}
                                salary={notice.salary}
                                applications={notice.applications}
                                type={notice.type}
                                link={notice.link}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default careers