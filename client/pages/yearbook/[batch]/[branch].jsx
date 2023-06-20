import Head from "next/head"
import Alumni from "../../../components/subComponents/Alumni"
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import yearData from '../../../data/yearbook.json'

const branch = () => {
	const [branchData, setBranchData] = useState([])

    const router = useRouter()
    const { branch, batch } = router.query

    const branchName = "";

    if(branch === "CSE") {
        branchName = "Computer Science and Eng."
    } else if(branch === "ME") {
        branchName = "Mechanical Eng."
    } else if(branch === "ECE") {
        branchName = "Electronics and Comm. Eng."
    } else if(branch === "EE") {
        branchName = "Electrical Eng."
    } else if(branch === "CE") {
        branchName = "Civil Eng."
    } else if(branch === "BT") {
        branchName = "Biotechnology"
    } else if(branch === "PE") {
		branchName = "Production Eng."
	} else if(branch === "MAA") {
		branchName = "MCA Department"
	}

	const getData = () => {
        const { batch, branch } = router.query

        if(batch && branch) {
            let year = 2022 - batch

            setBranchData(yearData[year][batch.toString()][0][branch])
        }
    }

	useEffect(() => {
        getData()
    }, [])

  	return (
    	<div className="flex justify-center py-20">
			<Head>
                <title>{batch} {branch}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
    	    <div className='grid grid-cols-4 gap-x-6 gap-y-6 px-96'>
    	        {branchData && branchData.map((alumni,i) => {
					return (
						<Alumni 
                        	image="/i1.png" 
                        	instituteName={alumni["Institute Name"]}
                        	firstName={alumni["First Name"]}
                        	lastName={alumni["Last Name"]}
                        	rollNo={alumni["University Roll No"]}
                        	email={alumni["E-mail ID"]}
                        	mobileNo={alumni["Mobile No."]}
                        	course={alumni["Course"]}
                        	branch={branchName}
                        	admission={alumni["Year of Admission"]}
                        	passing={batch}
                        	presentOrg={alumni["Present Organaization"]}
                        	currentOrg={alumni["Current Organaization"]}
                        	experience={alumni.Experience}
                        	brief={alumni["Brief Profile"]}
                        	key={i}
                   	 	/>
					)
				})}
    	    </div>
    	</div>
  	)
}

export default branch