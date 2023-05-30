import { useRouter } from "next/router"
import data from '../data/feed.json'

const feedPost = () => {
    const router = useRouter()
    const { feedNum } = router.query

    if(data[feedNum] === undefined) {
        return <div></div>
    }

    return (
        <div className="flex flex-col items-left justify-center shadow-lg shadow-gray-300 mx-[500px] bg-gray-50 px-8 py-4 gap-y-6 text-lg my-8">
            <div className="font-bold text-2xl">{data[feedNum].title}</div>
            <div className="">Posted On:  
                <span className="font-light"> {data[feedNum].date}</span>
            </div>
            <div className="">{data[feedNum].text}</div>
            <div className="">{data[feedNum].owner}</div>
        </div>
    )
}

export default feedPost