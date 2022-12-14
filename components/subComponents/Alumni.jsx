import Image from "next/image"

const Alumni = (props) => {
    return (
        <div className='flex flex-col gap-y-2 bg-slate-200 border border-gray-300 shadow-lg'>
            <div className='flex justify-center items-center bg-gray-300 h-40 w-full'>
                <Image 
                    src = {props.image}
                    alt = 'Profile Picture'
                    height = {161}
                    width = {240}
                />
            </div>
            <div className='flex flex-col px-2 pb-2 font-light text-xs'>
                <div className='font-bold text-base pb-2'>{props.name}</div>
                <div>Student, Class of {props.year}</div>
                <div>{props.branch}(B.Tech)</div>
                <div>Pauri, Uttrakhand</div>
            </div>
            <div className='flex justify-center items-center gap-x-2 pb-2 text-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00004F" className="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                
                <div className="text-[#00004F]">
                    Add to Network
                </div>
            </div>
        </div>
    )
}

export default Alumni