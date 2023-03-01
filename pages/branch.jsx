import Alumni from "../components/subComponents/Alumni"

const branch = () => {
	const alumns = [
		{
			image: '/i1.png',
			name: 'Abhinav Pathak',
			year: 2023,
			branch: 'Computer Science and Eng.',
			status: 'Student'
		},
		{
			image: '/i1.png',
			name: 'Sahil De',
			year: 2024,
			branch: 'Computer Science and Eng.',
			status: 'Student'
		},
		{
			image: '/i1.png',
			name: 'Hina Puri',
			year: 2022,
			branch: 'Computer Science and Eng.',
			status: 'Alumni'
		},
		{
			image: '/i1.png',
			name: 'Amit Singh',
			year: 2023,
			branch: 'Computer Science and Eng.',
			status: 'Student'
		},
		{
			image: '/i1.png',
			name: 'Mohit Pant',
			year: 2023,
			branch: 'Computer Science and Eng.',
			status: 'Student'
		},
		{
			image: '/i1.png',
			name: 'Kiran Sharma',
			year: 2023,
			branch: 'Computer Science and Eng.',
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