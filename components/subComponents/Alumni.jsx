import Image from "next/image"

const Alumni = (props) => {
    return (
        <div className='alumniMain'>
            <div className='alumniImage'>
                <Image 
                    src = {props.image}
                    alt = 'Profile Picture'
                    height = {161}
                    width = {240}
                />
            </div>
            <div className='alumniContent'>
                <div className='alumniName'>{props.name}</div>
                <div>Student, Class of {props.year}</div>
                <div>{props.branch}(B.Tech)</div>
                <div>Pauri, Uttrakhand</div>
            </div>
            <div className='alumniButton'>
                <div>
                    + Add to Network
                </div>
            </div>
        </div>
    )
}

export default Alumni