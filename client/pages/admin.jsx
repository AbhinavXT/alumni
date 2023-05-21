import { useRouter } from "next/router"
import Image from 'next/image'
import { useState, useEffect } from "react"

import Statistics from "../components/admin/Statistics"
import Requests from "../components/admin/Requests"

const profile = () => {
    const [component, setComponent] = useState(0)

    const router = useRouter();
    const { profile } = router.query;

    const changeCompoenet = (comp) => {
        setComponent(comp)
    } 
    
    return (
        <div className="flex flex-col items-left -mt-6 gap-y-8 py-16 px-96 h-screen">
            <div className="flex items-center justify-center font-bold text-4xl pt-16 pb-6">Admin</div>

            <div className="flex justify-center gap-x-24 font-bold px-8 pb-12">
                <button 
                    className="px-4 py-2 hover:shadow-lg hover:shadow-gray-300 rounded-md text-xl"
                    onClick={() => changeCompoenet(0)}
                >
                    Requests
                </button>

                <button 
                    className="px-4 py-2 hover:shadow-lg hover:shadow-gray-300 rounded-md text-xl"
                    onClick={() => changeCompoenet(1)}
                >
                    Statistics
                </button>
            </div>
            
            <div className="">
                {component === 0 && <Requests />}
                {component === 1 && <Statistics />}
            </div>
        </div>
    )
}   

export default profile