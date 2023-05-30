import Notice from '../components/Notice'

const Job = () => {
    const notices = [
        {
            owner: "Shivam Ramola",
            title: "Technical Consultant ",
            company: "PwC India",
            location: "Pan India",
            deadline: "Nov 30, 2022",
            salary: "Negotiable",
            applications: "1",
            type: "Job",
            published: "Nov 20, 2022"
        },
        {
            owner: "Shekhar B",
            title: "Engineer",
            company: "Bechtel Corporation",
            location: "Gurgaon District",
            deadline: "Sep 22, 2022",
            salary: "Negotiable",
            applications: "2",
            type: "Job",
            published: "Sep 14, 2022"
        },
        {
            owner: "Mohit Aggrawal",
            title: "Software Architect",
            company: "HCL Technologies Limited",
            location: "Noida",
            deadline: "Jan 31, 2022",
            salary: "Negotiable",
            applications: "1",
            type: "Job",
            published: "Jan 10, 2022"
        }
    ]

    return (
        <div className="jobMain">
            <div className="jobListHeader">
                <div>
                    Is your organization hiring new talent? Share the career opportunity with huge talent pool within GBPEC
                </div>
                <button className="jobAddButton">
                    + Post an Opportunity
                </button>
            </div>
    
            <div className="flex flex-col gap-y-4 py-2 rounded-sm">
                {notices.map((notice,i) => {
                    return (
                        <Notice 
                            owner={notice.owner}
                            title={notice.title}
                            company={notice.company}
                            location={notice.location}
                            deadline={notice.deadline}
                            salary={notice.salary}
                            applications={notice.applications}
                            type={notice.type}
                            published={notice.published}
                            key={i} 
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Job