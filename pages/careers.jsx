import { useState } from "react"

import Job from '../components/Job'
import Internships from '../components/Internships'
import SiteButton from "../components/SiteButton"

const careers = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false) 
    const [component, setComponent] = useState(0)

    const changeCompoenet = (comp) => {
        setComponent(comp)
    }   

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
                            <SiteButton text='All Opportunities' count='3' />
                        </button>
                        
                        <div className={`${dropdownOpen ? "hidden" : "flex flex-col gap-y-4 items-start"}`}>
                            <button onClick={() => changeCompoenet(0)}>
                                <div href='/careers' className='bg-gray-200 px-4 text-gray-600'>
                                    <div>Jobs</div>
                                </div>
                            </button>
                            
                            <button onClick={() => changeCompoenet(1)}>
                                <div href='/careers' className='bg-gray-200 px-4 text-gray-600'>
                                    <div>Internships</div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <SiteButton text='Posted By Me' count='0' />

                    <SiteButton text='Applied By Me' count='0' />
                </div>
            </div>

            {component === 0 && <Job />}
            {component === 1 && <Internships />}
        </div>
    )
}

export default careers