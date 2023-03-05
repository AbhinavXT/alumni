import { useRouter } from "next/router"

const profile = () => {
    const router = useRouter();
    const { profile } = router.query;

    return (
        <div className="flex justify-center items-center text-3xl font-bold">{profile}</div>
    )
}   

export default profile