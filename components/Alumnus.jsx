import Alumni from "./subComponents/Alumni"

const Alumnus = () => {
    const alumnus = [
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
            branch: 'Electrical Eng.',
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
            name: 'Prasoon Loyal',
            year: 2021,
            branch: 'Electronics and Comm Eng.',
            status: 'Alumni'
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
            name: 'Nancy Bedi',
            year: 2024,
            branch: 'Electrical Eng.',
            status: 'Student'
        },
        {
            image: '/i1.png',
            name: 'Abbas Mistry',
            year: 2020,
            branch: 'Biotechnology',
            status: 'Alumni'
        },
        {
            image: '/i1.png',
            name: 'Indira Persaud',
            year: 2023,
            branch: 'Mechnical Eng.',
            status: 'Student'
        },
        {
            image: '/i1.png',
            name: 'Nidhi Parsa',
            year: 2021,
            branch: 'Civil Eng.',
            status: 'Alummni'
        }
    ]

    return (
        <div className='alumnsGridMain'>
            {alumnus.map((alumnus, i) => {
                return (
                    <Alumni 
                        image={alumnus.image} 
                        name={alumnus.name} 
                        year={alumnus.year} 
                        branch={alumnus.branch} 
                        status={alumnus.status}
                        key={i}
                    />
                )
            })}
        </div>
    )
}

export default Alumnus