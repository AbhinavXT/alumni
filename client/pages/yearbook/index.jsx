import { useState, useEffect } from 'react'

import Year from '../../components/Year'
import batches from '../../data/batches.json'

// import data from '../../data/users.json'

const yearbook = () => {
    // const getData = () => {
    //     const cse = data.filter((user) => 
    //         user["Year of Passing"] == 2000 && user["Branch"] == "Computer Science & Eng."
    //     )
    //     const ee = data.filter((user) => 
    //         user["Year of Passing"] == 2000 && user["Branch"] == "Electrical Eng."
    //     )
    //     const ce = data.filter((user) => 
    //         user["Year of Passing"] == 2000 && user["Branch"] == "Civil Eng."
    //     )
    //     const bt = data.filter((user) => 
    //         user["Year of Passing"] == 2000 && user["Branch"] == "Bio Technology"
    //     )
    //     const ece = data.filter((user) => 
    //         user["Year of Passing"] == 2000 && user["Branch"] == "Electronics & Comm. Eng."
    //     )
    //     const me = data.filter((user) => 
    //         user["Year of Passing"] == 2000 && user["Branch"] == "Mechanical Eng."
    //     )
    //     const pe = data.filter((user) => 
    //         user["Year of Passing"] == 2000 && user["Branch"] == "Production Eng."
    //     )
    //     const mca = data.filter((user) => 
    //         user["Year of Passing"] == 2000 && user["Branch"] == "MCA Department"
    //     )

    //     console.log("cse", cse)
    //     console.log("ee", ee)
    //     console.log("ce", ce)
    //     console.log("bt", bt)
    //     console.log("ece", ece)
    //     console.log("me", me)
    //     console.log("pe", pe)
    //     console.log("mca", mca)
    // }

    // useEffect(() => {
    //     getData()
    // }, [])

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