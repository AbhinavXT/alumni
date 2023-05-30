import SubRequest from '../subComponents/SubRequest'
import SubFeedRequest from '../subComponents/SubFeedRequest'

const Requests = ({ requests, feedRequests }) => {
    return (
        <div className='flex flex-col gap-y-16'>
            <div className='flex justify-between items-center'>
                <div className='font-bold text-2xl'>Pending Requests</div>
            </div>
            <div className='flex flex-col gap-y-6'>
                {requests.map((request, i) => {
                    return (
                        <SubRequest request={request} key={i} />
                    )
                })}

                {feedRequests.map((feedRequest, i) => {
                    return (
                        <SubFeedRequest feedRequest={feedRequest} key={i} />
                    )
                })}
            </div>
        </div>
    )
}

export default Requests