import SubRequest from '../subComponents/SubRequest'

const Requests = () => {
    return (
        <div className='flex flex-col gap-y-16'>
            <div className='flex justify-between items-center'>
                <div className='font-bold text-2xl'>Pending Requests</div>
            </div>
            <div className='flex flex-col gap-y-6'>
                <div className='flex justify-between font-bold text-xl'>
                    <div>Owner</div>
                    <div>Type</div>
                    <div>Date</div>
                    <div>Info Link</div>
                    <div>Accept/Reject</div>
                </div>
                <SubRequest name={'Dipti Sharma'} type={'Registration'} date={'07-05-2023'} link={'/'} />
                <SubRequest name={'Hem Chandra'} type={'Career Post'} date={'21-05-2023'} link={'/'} />
                <SubRequest name={'Aman Singh'} type={'Feed Post'} date={'11-05-2023'} link={'/'} />
            </div>
        </div>
    )
}

export default Requests