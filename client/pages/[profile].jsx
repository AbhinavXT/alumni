import { useRouter } from "next/router"
import Image from 'next/image'
import { useState, useEffect } from "react"

import About from "../components/profile/About"
import Education from "../components/profile/Education"
import Experience from "../components/profile/Experience"

const profile = () => {
    const [component, setComponent] = useState(0)

    const router = useRouter();
    const { profile } = router.query;

    const changeCompoenet = (comp) => {
        setComponent(comp)
    } 
    
    return (
        <div className="flex flex-col items-left -mt-6 gap-y-8 py-16 px-96 h-screen">
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
                    <div className="italic">Bachelors of Technology</div>
                    <div className="italic">Computer Science and Engineering</div>
                    <div className="text-blue-700">Authorized User</div>    
                </div>
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
                {component === 0 && <About />}
                {component === 1 && <Education />}
                {component === 2 && <Experience />}
            </div>
        </div>
    )
}   

export default profile