import Branch from '../components/Branch'

const branches = () => {
    return (
        <div className='flex flex-col gap-y-16 -mt-60'>
            <div className='flex justify-between items-center px-96'>
                <div className='text-xl font-bold'>Select Course/Degree/Division/Department</div>
                <button className='text-[#00004F] border-2 rounded-md border-[#00004F] py-1 px-2 hover:bg-[#00004F] hover:text-gray-200 ease-in duration-300'>View My Batchmates</button>
            </div>
            <div className='grid grid-cols-4 gap-x-8 gap-y-6 px-96'>
                <Branch branch = 'CSE' memberNum='6'/>
                <Branch branch = 'ME' memberNum='4'/>
                <Branch branch = 'ECE' memberNum='4'/>
                <Branch branch = 'EE' memberNum='5'/>
                <Branch branch = 'CE' memberNum='3'/>
                <Branch branch = 'BT' memberNum='5'/>
            </div>
        </div>
    )
}

export default branches