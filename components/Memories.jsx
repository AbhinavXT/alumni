import SubMemories from './subComponents/SubMemories'

const Memories = () => {
    return (
        <div className="flex flex-col py-8 justify-center items-center gap-y-8 w-screen px-40 text-center">
            <div className="text-3xl font-extrabold">Memories</div>
            <div className='flex gap-x-20'>
                <SubMemories />
                <SubMemories />
                <SubMemories />
            </div>
        </div>
    )
}

export default Memories