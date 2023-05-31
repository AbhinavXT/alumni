import Image from "next/image"
import Link from "next/link"

const Alumni = (props) => {
    return (
        <Link href = {{
            pathname: '/[profile]',
			query: { 
                profile: props.firstName + " " + props.lastName,
                email: props.email,
                start: props.admission,
                end: props.passing,
                mobile: props.mobileNo,
                exp: props.experience,
                org: props.currentOrg,
                brief: props.brief,
                course: props.course,
                branch: props.branch
            }
        }}>
            <div className='alumniMain'>
                <div className='alumniImage'>
                    <Image 
                        src = {props.image}
                        alt = 'Profile Picture'
                        height = {240}
                        width = {320}
                    />
                </div>
                <div className='alumniContent'>
                    <div className='alumniName'>{props.firstName + " " + props.lastName}</div>
                    <div>Student, Class of {props.passing}</div>
                    <div>{props.branch}(B.Tech)</div>
                    <div>Pauri, Uttrakhand</div>
                </div>
            </div>
        </Link>
    )
}

export default Alumni