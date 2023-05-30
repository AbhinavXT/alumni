import SubRequest from '../subComponents/SubRequest'
import moment from 'moment'

const Requests = ({ requests }) => {
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

                {requests.map((request, i) => {
                    return (
                        <SubRequest request={request} key={i} />
                    )
                })}
            </div>
        </div>
    )
}

export default Requests