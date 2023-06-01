import { useState, useEffect } from "react"
import { getSession } from 'next-auth/react'

import Statistics from "../components/admin/Statistics"
import Requests from "../components/admin/Requests"
import SubAdmin from "../components/admin/SubAdmin"
import Database from "../components/admin/Database"

const profile = () => {
    const [component, setComponent] = useState(0)
    const [newRequests, setNewRequests] = useState([])
    const [feedRequests, setFeedRequests] = useState([])
    const [user, setUser] = useState(null)
    const [sub, setSub] = useState(null)

    const handleSession = async() => {
        const session = await getSession()
        
        if(session)
            setUser(session.user.email)
        
        const subAdmin = localStorage.getItem("subAdminEmail")

        if(subAdmin)
            setSub(subAdmin)
    }

    const getData = () => {
        const jobData = localStorage.getItem("post")
        const jobRequest =  jobData !== null ? JSON.parse(jobData) : null

        const feedData = localStorage.getItem("feedPost")
        const feedRequest =  feedData !== null ? JSON.parse(feedData) : null

        if(jobRequest !== null) {
            setNewRequests([...newRequests, jobRequest])
        }

        if(feedRequest !== null) {
            setFeedRequests([...feedRequests, feedRequest])
        }
    }

    useEffect(() => {
        handleSession()
        getData()
    }, [])

    const changeCompoenet = (comp) => {
        setComponent(comp)
    }

    if(user !== 'abhinavpathaka17@gmail.com' && user !== sub) {
        return (
            <div className="flex justify-center items-center text-2xl text-red-700">You are not authorized to access this page</div>
        )
    }
    
    return (
        <div className="flex flex-col items-left -mt-6 gap-y-8 py-16 px-96 h-screen mb-12">
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

                <button 
                    className="px-4 py-2 hover:shadow-lg hover:shadow-gray-300 rounded-md text-xl"
                    onClick={() => changeCompoenet(2)}
                >
                    Assign SubAdmin
                </button>

                <button 
                    className="px-4 py-2 hover:shadow-lg hover:shadow-gray-300 rounded-md text-xl"
                    onClick={() => changeCompoenet(3)}
                >
                    Get Database
                </button>
            </div>
            
            <div className="">
                {component === 0 && <Requests requests= {newRequests} feedRequests={feedRequests} />}
                {component === 1 && <Statistics />}
                {component === 2 && <SubAdmin />}
                {component === 3 && <Database />}
            </div>
        </div>
    )
}   

export default profile