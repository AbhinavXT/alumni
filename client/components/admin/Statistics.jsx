import { useState, useEffect } from 'react'

import data from '../../data/users.json'

const Statistics = () => {
    const [requests, setRequests] = useState(0)
    const [feed, setFeed] = useState(3)
    const [career, setCareer] = useState(4)

    const getData = () => {
        const jobData = localStorage.getItem("post")
        const jobRequest =  jobData !== null ? JSON.parse(jobData) : null

        const feedData = localStorage.getItem("feedPost")
        const feedRequest =  feedData !== null ? JSON.parse(feedData) : null

        if(jobRequest !== null) {
            setFeed(4)
            setRequests(1)
        }

        if(feedRequest !== null) {
            setCareer(5)
            setRequests(1)
        }

        if(jobRequest !== null && feedRequest !== null)
            setRequests(2)
    }

    useEffect(() => {
        getData()
    }, []) 

    return (
        <div className='flex flex-col gap-y-12'>
            <div className='font-bold text-2xl'>Statistics</div>
            
            <div className='flex flex-col gap-y-6 px-8'>
                <div className='flex items-center justify-between gap-x-20 font-bold'>
                    <div>Pending Requests</div>
                    <div className='text-blue-700 hover:underline cursor-pointer'>{requests}</div>
                </div>

                <div  className='flex items-center justify-between gap-x-20 font-bold'>
                    <div>Registered users</div>
                    <div className='text-blue-700 hover:underline cursor-pointer'>{data.length}</div>
                </div>

                <div className='flex items-center justify-between gap-x-20 font-bold'>
                    <div>Feed Posts</div>
                    <div className='text-blue-700 hover:underline cursor-pointer'>{feed}</div>
                </div>

                <div className='flex items-center justify-between gap-x-20 font-bold'>
                    <div>Career Posts</div>
                    <div className='text-blue-700 hover:underline cursor-pointer'>{career}</div>
                </div>

                <div className='flex items-center justify-between gap-x-20 font-bold'>
                    <div>Galarries</div>
                    <div className='text-blue-700 hover:underline cursor-pointer'>1</div>
                </div>
            </div>
        </div>
    )
}

export default Statistics