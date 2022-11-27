import SubMemories from './subComponents/SubMemories'

const Memories = () => {
    return (
        <div className="flex flex-col py-8 justify-center gap-y-8 w-screen px-80 text-center">
            <div className="flex justify-between">
                <div className="text-3xl font-extrabold">Memories</div>
                <button className='px-6 py-1 border border-[#00004F]'>View All</button>
            </div>
            <div className='flex gap-x-20 items-center justify-center'>
                <SubMemories 
                    date = "Oct 08, 2020"
                    title = "A Request to joined Alumni Members in Portal"
                    text = "Dear Alumni Members, It is observed that number of alumni registered in this alumni portal is constant now. We are around 3000 members of Alumni Association..."
                    views = "204"
                />

                <SubMemories 
                    date = "Sep 10, 2020"
                    title = "JOB OPENINGS"
                    text = "Dear Alumnis, Please post job opening in this thread mentioning briefly: 1. Name of company 2. Job profile 3. Eligibility Criteria/Qualification: 4...."
                    views = "248"
                />

                <SubMemories 
                    date = "Aug 25, 2020"
                    title = "Notice"
                    text = "All Alumni Member of GBPIET, Thank you all. We are very much pleased to see such a wonderful response in very short time. I want to inform you that this is an..."
                    views = "301"
                />
            </div>
        </div>
    )
}

export default Memories