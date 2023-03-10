import Head from "next/head"
import { useState } from "react"

import SearchButton from "../components/SearchButton"
import Alumnus from "../components/Alumnus"

import data from "../data/users.json"

const directory = () => {
    const [expand, setExpand] = useState(false)

    const expansion = () => {
        setExpand(true)
    }

    return (
        <div className="directoryMain">
            <Head>
                <title>Alumni Directory</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="directoryOuterDiv">
                <div className="text-lg">Filters</div>
                <div className='directoryFormOuterDiv'>
                    <form action="submit">
                        <input 
                            className="directoryFormInput" 
                            id="filter" 
                            type="text" 
                            placeholder="Enter keyword..." 
                        />
                    </form>
                    <button className="bg-[#F13617] p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col gap-y-4">
                    <button onClick={() => {expand ? setExpand(false) : setExpand(true)}}>
                        <SearchButton expanded={expand} text='Search by Role' />
                    </button>
                    <button>
                        <SearchButton expanded={expand} text='Year of Joining' />
                    </button>
                    <button>
                        <SearchButton expanded={expand} text='Year of Graduation' />
                    </button>
                    <button>
                        <SearchButton expanded={expand} text='Division/Department' />
                    </button>
                    <button>
                        <SearchButton expanded={expand} text='Course/Degree' />
                    </button>
                    <button>
                        <SearchButton expanded={expand} text='Current Location' />
                    </button>
                    <button>
                        <SearchButton expanded={expand} text='Hometown' />
                    </button>
                    <button>
                        <SearchButton expanded={expand} text='Company' />
                    </button>
                    <button>
                        <SearchButton expanded={expand} text='Designation' />
                    </button>
                    <button>
                        <SearchButton expanded={expand} text='Hometown' />
                    </button>
                    <button>
                        <SearchButton expanded={expand} text='Work Industry' />
                    </button>
                    <button>
                        <SearchButton expanded={expand} text='Skills' /> 
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-y-8">
                <div className="directoryAlumnsGrid">{data.length} Members in community</div>
                <Alumnus />
            </div>
        </div>
    )
}

export default directory