import Head from "next/head"
import Alumni from "../../../components/subComponents/Alumni"
import { useRouter } from 'next/router'

import data from "../../../data/profile.json"

const branch = () => {
    const router = useRouter()
    const { branch, batch } = router.query

    const branchName = "";

    if(branch === "CSE") {
        branchName = "Computer Science and Engg."
    } else if(branch === "ME") {
        branchName = "Mechanical Engg."
    } else if(branch === "ECE") {
        branchName = "Electronics and Comm. Engg."
    } else if(branch === "EE") {
        branchName = "Electrical Engg."
    } else if(branch === "CE") {
        branchName = "Civil Engg."
    } else if(branch === "BT") {
        branchName = "Biotechnology"
    }

  	return (
    	<div className="flex justify-center py-20">
			<Head>
                <title>{batch} {branch}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
    	    <div className='grid grid-cols-4 gap-x-6 gap-y-6 px-96'>
    	        {data.map((alumni,i) => {
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