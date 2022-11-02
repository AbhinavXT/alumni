import { useState } from "react"

import Job from '../components/Job'
import SiteButton from "../components/SiteButton"

const events = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)    

    return (
        <div className="flex justify-center gap-x-12 mb-2 mt-6">
            <div className="flex flex-col gap-y-8 font-bold">
                <div className="text-2xl font-light">JOB CATEGORIES</div>
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-4">
                        <button onClick={() =>
                            dropdownOpen
                                ? setDropdownOpen(false)
                                : setDropdownOpen(true)
                        }>
                            <SiteButton text='All Opportunities' count='0' />
                        </button>
                        
                        <div className={`${dropdownOpen ? "flex flex-col gap-y-4" : "hidden"}`}>
                            <a href='/careers' className='bg-gray-200 px-4 text-gray-600'>
                                <div>Jobs</div>
                            </a>
                            
                            <a href='/careers' className='bg-gray-200 px-4 text-gray-600'>
                                <div>Internships</div>
                            </a>
                        </div>
                    </div>

                    <SiteButton text='Posted By Me' count='0' />

                    <SiteButton text='Applied By Me' count='0' />
                </div>
            </div>

            <Job />
        </div>
    )
}

export default events