import Year from '../../components/Year'

const yearbook = () => {
    const years = [
        {batch:'2026',memberNum:'21'},
        {batch:'2025',memberNum:'21'},
        {batch:'2024',memberNum:'21'},
        {batch:'2023',memberNum:'21'},
        {batch:'2022',memberNum:'21'},
        {batch:'2021',memberNum:'21'},
        {batch:'2020',memberNum:'21'},
        {batch:'2019',memberNum:'21'},
        {batch:'2018',memberNum:'21'},
        {batch:'2017',memberNum:'21'},
        {batch:'2016',memberNum:'21'},
        {batch:'2015',memberNum:'21'},
        {batch:'2014',memberNum:'21'},
        {batch:'2013',memberNum:'21'},
        {batch:'2012',memberNum:'21'},
        {batch:'2011',memberNum:'21'},
        {batch:'2010',memberNum:'21'},
        {batch:'2009',memberNum:'21'},
        {batch:'2008',memberNum:'21'},
        {batch:'2007',memberNum:'21'},
        {batch:'2006',memberNum:'21'},
        {batch:'2005',memberNum:'21'},
        {batch:'2004',memberNum:'21'},
        {batch:'2003',memberNum:'21'},
        {batch:'2001',memberNum:'21'},
        {batch:'2000',memberNum:'21'},
        {batch:'1999',memberNum:'21'},
        {batch:'1998',memberNum:'21'},
        {batch:'1997',memberNum:'21'},
        {batch:'1996',memberNum:'21'},
        {batch:'1995',memberNum:'21'},
        {batch:'1994',memberNum:'21'},
        {batch:'1993',memberNum:'21'},
        {batch:'1992',memberNum:'21'},
        {batch:'1991',memberNum:'21'}
    ]
  
    return (
        <div className='yearbookMain'>
            <div className='yearbookHeader'>
                <div className='text-xl font-bold'>Select Year</div>
                <button className='yearbookBatchmate'>View My Batchmates</button>
            </div>
            <div className='yearbookGrid'>
                {years.map((year, i) => {
                    return (
                        <Year batch = {year.batch} memberNum = {year.memberNum} key = {i}/>
                    )
                })}
            </div>
        </div>
    )
}

export default yearbook