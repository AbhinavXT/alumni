import Year from '../../components/Year'
import batches from '../../data/batches.json'

const yearbook = () => {
    return (
        <div className='yearbookMain'>
            <div className='yearbookHeader'>
                <div className='text-xl font-bold'>Select Year</div>
                <button className='yearbookBatchmate'>View My Batchmates</button>
            </div>
            <div className='yearbookGrid'>
                {batches.map((year, i) => {
                    return (
                        <Year batch = {year.batch} memberNum = {year.memberNum} key = {i}/>
                    )
                })}
            </div>
        </div>
    )
}

export default yearbook