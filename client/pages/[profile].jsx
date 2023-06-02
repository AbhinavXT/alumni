import { useRouter } from "next/router"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from "react"
import { getSession } from 'next-auth/react'

import About from "../components/profile/About"
import Education from "../components/profile/Education"
import Experience from "../components/profile/Experience"

const profile = () => {
    const [component, setComponent] = useState(0)
    const [user, setUser] = useState(null)

    const router = useRouter();
    const { profile, email, start, end, mobile, exp, org, brief, course, branch } = router.query;

    const changeCompoenet = (comp) => {
        setComponent(comp)
    }

    const handleSession = async() => {
        const session = await getSession()
        
        if(session)
            setUser(session.user.email)
    }

    useEffect(() => {
        handleSession()
    }, [])
    
    return (
        <div className="flex flex-col items-left -mt-6 gap-y-8 py-16 px-96 h-screen">
            <div className="flex justify-between items-center">
                <div className="flex gap-x-9 items-center">
                    <Image 
                        src = '/i1.png'
                        alt = 'Profile Picture'
                        height = {150}
                        width = {150}
                        className="rounded-full"
                        />

                    <div className="flex flex-col gap-y-1">
                        <div className="font-bold text-2xl">{profile}</div>
                        <div className="flex gap-x-1">
                            <div className="italic">{course},</div>
                            <div className="italic">{branch}</div>
                        </div>
                        <div>{start} - {end}</div>
                        <div className="text-blue-700">Authorized User</div>    
                    </div>
                </div>

                {user && user === email && <div className="text-red-700 font-bold underline">
                    <Link href='/userForm'>
                        Edit Profile
                    </Link>
                </div>}
            </div>

            <div className="flex justify-center gap-x-24 font-bold px-8">
                <button 
                    className="px-4 py-2 hover:shadow-lg hover:shadow-gray-300 rounded-md text-xl"
                    onClick={() => changeCompoenet(0)}
                >
                    About
                </button>

                <button 
                    className="px-4 py-2 hover:shadow-lg hover:shadow-gray-300 rounded-md text-xl"
                    onClick={() => changeCompoenet(1)}
                >
                    Education
                </button>

                <button 
                    className="px-4 py-2 hover:shadow-lg hover:shadow-gray-300 rounded-md text-xl"
                    onClick={() => changeCompoenet(2)}
                >
                    Experience
                </button>
            </div>
            
            <div className="">
                {component === 0 && <About email={email} mobile={mobile} brief={brief} />}
                {component === 1 && <Education start={start} end={end} course={course} branch={branch} />}
                {component === 2 && <Experience brief={brief} org={org} exp={exp} end={end} />}
            </div>
        </div>
    )
}   

export default profile