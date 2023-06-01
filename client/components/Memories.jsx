import SubMemories from './subComponents/SubMemories'

const Memories = () => {
    const subMemories = [
        {
            date: "Oct 08, 2020",
            title: "A Request to joined Alumni Members in Portal",
            text: "Dear Alumni Members, It is observed that number of alumni registered in this alumni portal is constant now. We are around 3000 members of Alumni Association...",
            views: "204"
        },
        {
            date: "Sep 10, 2020",
            title: "JOB OPENINGS",
            text: "Dear Alumnis, Please post job opening in this thread mentioning briefly: 1. Name of company 2. Job profile 3. Eligibility Criteria/Qualification: 4....",
            views: "248"
        },
        {
            date: "Aug 25, 2020",
            title: "Notice",
            text: "All Alumni Member of GBPIET, Thank you all. We are happy to inform you that we have successfully completed the first phase of our Alumni Portal...",
            views: "301"
        },
    ]

    return (
        <div className="memoriesMain">
            <div className="memoriesHeaderTextOuterDiv">
                <div className="memoriesHeaderTextInnerDivOne">Memories</div>
                <a href='/feed' className='memoriesHeaderTextInnerDivTwo cursor-pointer'>View All</a>
            </div>
            <div className='memoriesGrid'>
                {subMemories.map((subMemories, index) => {
                    return (
                        <SubMemories
                            date={subMemories.date}
                            title={subMemories.title}
                            text={subMemories.text}
                            views={subMemories.views}
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Memories