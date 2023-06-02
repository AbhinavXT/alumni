import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import Branch from '../../../components/Branch'

import yearData from '../../../data/yearbook.json'

const branches = () => {
    const [branchData, setBranchData] = useState([])

    const branch = [
        {branch:'CSE',memberNum:'6'},
        {branch:'ME',memberNum:'4'},
        {branch:'ECE',memberNum:'4'},
        {branch:'EE',memberNum:'5'},
        {branch:'CE',memberNum:'3'},
        {branch:'BT',memberNum:'5'},
        {branch:'MCA',memberNum:'7'}
    ]
    
    const router = useRouter()
    const { batch } = router.query

    const getData = () => {
        const { batch } = router.query

        if(batch) {
            let year = 2022 - batch

            setBranchData(yearData[year][batch.toString()][0])
        }
    }

    useEffect(() => {
        getData()
    }, [])
    
    return (
        <div className='branchesMain'>
            <Head>
                <title>{batch}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='branchesHeader'>
                <div className='text-xl font-bold'>Select Course/Degree/Division/Department</div>
            </div>
            <div className='branchesGrid'>
                {branchData && branch.map((branch, i) => {
                    return (  
                        <Branch
                            branchData = {branchData}
                            branch = {branch.branch} 
                            memberNum = {branch.memberNum} 
                            batch = {batch}
                            key = {i}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default branches