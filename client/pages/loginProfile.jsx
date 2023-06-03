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
    const [status, setStatus] = useState(0)
    const [user, setUser] = useState(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSession = async() => {
        const session = await getSession()
        
        if(session) {
            setName(session.user.name)
            setEmail(session.user.email)
        }
    }


    const changeCompoenet = (comp) => {
        setComponent(comp)
    }

    const getUser = () => {
        const data = localStorage.getItem("userData")
        const stat = localStorage.getItem("userStatus")

        console.log(data)

        if(data != null) {
           setUser(data)
        }

        if(stat !== null) {
            setStatus(1)
        }

        console.log(user)
    }

    useEffect(() => {
        handleSession()
        getUser()
    }, [])
    
    return (
        <div>
            {status == 1 ? (<div className="flex flex-col items-left -mt-6 gap-y-8 py-16 px-96 h-screen">
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
                            <div className="font-bold text-2xl">{name}</div>
                            <div className="flex gap-x-1">
                                <div className="italic">B.Tech,</div>
                                <div className="italic">CSE</div>
                            </div>
                            <div>2019 - 2023</div>
                            {status == 1 ? (
                                <div className="text-blue-700">Authorized User</div>
                                ) : (
                                <div className="text-red-700">Unauthorized User</div>
                            )}   
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
                    {component === 0 && <About email={email} mobile="9149037072" brief="Student" />}
                    {component === 1 && <Education start="2019" end="2023" course="B.Tech" branch="CSE" />}
                    {component === 2 && <Experience brief="" org="" exp="0" end="" />}
                </div>
            </div>) : (
                <div></div>
            )}
        </div>
    )
}   

export default profile