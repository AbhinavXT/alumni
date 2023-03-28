import Head from 'next/head'
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
        <div className="careersMain">
            <Head>
                <title>Careers</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="careersOuterDiv">
                <div className="careerHeader">JOB CATEGORIES</div>
                <div className="careersInnerDivs">
                    <div className="careersInnerDivs">
                        <button onClick={() =>
                            dropdownOpen
                                ? setDropdownOpen(false)
                                : setDropdownOpen(true)
                        }>
                            <SiteButton text='All Opportunities' count='3' />
                        </button>
                        
                        <div className={`${dropdownOpen ? "hidden" : "careersDropdown"}`}>
                            <button onClick={() => changeCompoenet(0)}>
                                <div href='/careers' className='careersDropdownMenu'>
                                    <div>Jobs</div>
                                </div>
                            </button>
                            
                            <button onClick={() => changeCompoenet(1)}>
                                <div href='/careers' className='careersDropdownMenu'>
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