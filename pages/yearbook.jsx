import Year from '../components/Year'

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
    <div className='flex flex-col gap-y-16 py-20'>
      <div className='flex justify-between items-center px-[300px]'>
        <div className='text-xl font-bold'>Select Year</div>
        <button className='text-[#00004F] border-2 rounded-md border-[#00004F] py-1 px-2 hover:bg-[#00004F] hover:text-gray-200 ease-in duration-300'>View My Batchmates</button>
      </div>
      <div className='grid grid-cols-4 gap-x-8 gap-y-6 px-[400px]'>
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