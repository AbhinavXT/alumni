import Alumni from "../../../components/subComponents/Alumni"
import { useRouter } from 'next/router'

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

	const alumns = [
		{
			image: '/i1.png',
			name: 'Abhinav Pathak',
			year: batch,
			branch: branchName,
			status: 'Student'
		},
		{
			image: '/i1.png',
			name: 'Sahil De',
			year: batch,
			branch: branchName,
			status: 'Student'
		},
		{
			image: '/i1.png',
			name: 'Hina Puri',
			year: batch,
			branch: branchName,
			status: 'Alumni'
		},
		{
			image: '/i1.png',
			name: 'Amit Singh',
			year: batch,
			branch: branchName,
			status: 'Student'
		},
		{
			image: '/i1.png',
			name: 'Mohit Pant',
			year: batch,
			branch: branchName,
			status: 'Student'
		},
		{
			image: '/i1.png',
			name: 'Kiran Sharma',
			year: batch,
			branch: branchName,
			status: 'Student'
		},
	] 

  	return (
    	<div className="flex justify-center py-20">
    	    <div className='grid grid-cols-4 gap-x-6 gap-y-6 px-auto'>
    	        {alumns.map((alumn) => {
					return (
						<Alumni
							image={alumn.image}
							name={alumn.name}
							year={alumn.year}
							branch={alumn.branch}
							status={alumn.status}
						/>
					)
				})}
    	    </div>
    	</div>
  	)
}

export default branch