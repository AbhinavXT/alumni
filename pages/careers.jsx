import SiteButton from "../components/SiteButton"

const events = () => {
  return (
    <div className="flex justify-center gap-x-12 -mt-20">
        <div className="flex flex-col gap-y-8 font-bold">
            <div className="text-2xl font-light">JOB CATEGORIES</div>
            <div className="flex flex-col gap-y-4">
                <SiteButton text='All Opportunities ' count='0' />
                <SiteButton text='Posted By Me' count='0' />
                <SiteButton text='Applied By Me' count='0' />
            </div>
        </div>
        
        <div className="flex flex-col gap-y-8">
            <div className="flex flex-col px-8 py-4 rounded-sm text-lg bg-[#010673] text-gray-200 text-left gap-y-4">
                <div>
                    Is your organization hiring new talent? Share the career opportunity with huge talent pool within GBPEC
                </div>
                <button className="bg-gray-200 text-black py-1 mx-auto px-12 rounded-md">
                    + Post an Opportunity
                </button>
            </div>

            <div className="bg-gray-100 px-12 divide-y-2 divide-gray-900">
                <div className="flex gap-x-4 items-center py-4">
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

                <div className="flex flex-col gap-y-6 p-6">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-y-4">
                            <div className="text-lg">Your preferences as job provider? *</div>
                            <div className="flex flex-col gap-y-4">
                                <div>Job provider</div>
                                <div>Job referrer</div>
                                <div>Not interested as job provider</div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-4">
                            <div className="text-lg">Your preferences as job seeker? *</div>
                            <div className="flex flex-col gap-y-4">
                                <div>Actively applying for job</div>
                                <div>Casually looking for job</div>
                                <div>Not interested in job offers</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-end">
                        <button className="bg-[#010673] text-gray-200 px-6 py-2 rounded">
                            Save
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 px-12 divide-y-2 divide-gray-900">
                <div className="flex gap-x-4 items-center py-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                            <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                        </svg>      
                    </div>
                    <div>
                        Latest Opportunity Providers
                    </div>
                </div>

                <div className="py-4">No Current Provider</div>
            </div>
        </div>
    </div>
  )
}

export default events