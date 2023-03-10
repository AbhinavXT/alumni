import Alumni from './subComponents/Alumni'
import data from "../data/profile.json"

const Network = () => {
    return (
        <div className='alumnsGridMain'>
            {data.map((alumni, i) => {
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
                        branch={alumni["Branch"]}
                        admission={alumni["Year of Admission"]}
                        passing={alumni["Year of Passing"]}
                        presentOrg={alumni["Present Organaization"]}
                        currentOrg={alumni["Current Organaization"]}
                        experience={alumni.Experience}
                        brief={alumni["Brief Profile"]}
                        key={i}
                    />
                )
            })}
        </div>
    )
}

export default Network