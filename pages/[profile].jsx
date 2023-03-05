import { useRouter } from "next/router"

const profile = () => {
    const router = useRouter();
    const { profile } = router.query;

    return (
        <div>{profile}</div>
    )
}   

export default profile