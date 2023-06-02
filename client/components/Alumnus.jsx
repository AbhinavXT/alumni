import Alumni from "./subComponents/Alumni"

const Alumnus = ({ search }) => {
    return (
        <div className='alumnsGridMain'>
            {search.map((alumni, i) => {
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
                        experience={alumni["Experience"]}
                        brief={alumni["Brief Profile"]}
                        key={i}
                    />
                )
            })}
        </div>
    )
}

export default Alumnus


// export async function getServerSideProps() {
//     try {
//         const client = await clientPromise;
//         const db = client.db("website");

//         const users = await db
//             .collection("users")
//             .find({})
//             .toArray();

//         return {
//             props: { users: JSON.parse(JSON.stringify(users)) },
//         };
//     } catch (e) {
//         console.error(e);
//     }
// }