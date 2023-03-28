import Notice from '../components/Notice'

const Internships = () => {
    const notices = [
        {
            owner: "Prafull Pandey",
            title: "Web Developer",
            company: "MyRx Technologies",
            location: "Work From Home",
            deadline: "Jul 31, 2022",
            salary: "Based on talent",
            applications: "1",
            type: "Internship",
            published: "Jul 18, 2022"
        },
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
            
            <div className="jobPrefrenceMain">
                <div className="jobPrefrenceHeader">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                            <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                        </svg>      
                    </div>
                    <div>
                        Set Job Portal Preferences
                    </div>
                </div>
                <div className="jobPrefrenceTextOuterDiv">
                    <div className="jobPrefrenceTextInnerDivOne">
                        <div className="jobPrefrenceTextInnerDivTwo">
                            <div className="text-lg">Your preferences as job provider? *</div>
                            <div className="jobPrefrenceTextInnerDivTwo">
                                <div>Job provider</div>
                                <div>Job referrer</div>
                                <div>Not interested as job provider</div>
                            </div>
                        </div>
                        <div className="jobPrefrenceTextInnerDivTwo">
                            <div className="text-lg">Your preferences as job seeker? *</div>
                            <div className="jobPrefrenceTextInnerDivTwo">
                                <div>Actively applying for job</div>
                                <div>Casually looking for job</div>
                                <div>Not interested in job offers</div>
                            </div>
                        </div>
                    </div>
                    <div className="jobPrefrenceSaveButtonDiv">
                        <button className="jobPrefrenceSaveButtonButton">
                            Save
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="jobNoticeMain">
                {notices.map((notice, i) => {
                    return (
                        <Notice  
                            key={i}
                            owner={notice.owner}
                            title={notice.title}
                            company={notice.company}
                            location={notice.location}
                            deadline={notice.deadline}
                            salary={notice.salary}
                            applications={notice.applications}
                            type={notice.type}
                            published={notice.published}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Internships