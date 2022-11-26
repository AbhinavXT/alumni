import { useState } from "react"

import SearchButton from "../components/SearchButton"
import Alumnus from "../components/Alumnus"

const directory = () => {
    const [expand, setExpand] = useState(false)

    const expansion = () => {
        setExpand(true)
    }

    return (
        <div className="flex justify-center gap-x-12 my-16">
            <div className="flex flex-col gap-y-12 font-bold">
                <div className="text-lg">Filters</div>
                <div className='flex gap-x-2 items-center justify-center'>
                    <form action="submit">
                        <input className="bg-gray-100 shadow appearance-none border rounded w-full py-4 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter keyword..." />
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
                        <SearchButton expanded={expand} text='Current Location' />
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
                <div className="px-64 py-2 h-12 rounded-sm text-xl bg-[#010673] text-gray-200 text-left">3 Members in community</div>
                <Alumnus />
            </div>
        </div>
    )
}

export default directory