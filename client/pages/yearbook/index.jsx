import { useState, useEffect } from 'react'

import Year from '../../components/Year'
import batches from '../../data/batches.json'

import data from '../../data/users.json'

const yearbook = () => {
    const getData = () => {
        const users = data.filter((user) => 
            user["Year of Passing"] == 2021 && user["Branch"] == "Mechanical Eng."
        )

        console.log(users)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='yearbookMain'>
            <div className='yearbookHeader'>
                <div className='text-xl font-bold'>Select Year</div>
            </div>
            <div className='yearbookGrid'>
                {batches.map((year, i) => {
                    return (
                        <Year batch = {year.batch} memberNum={year.memberNum} key = {i}/>
                    )
                })}
            </div>
        </div>
    )
}

export default yearbook