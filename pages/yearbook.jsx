import Year from '../components/Year'

const yearbook = () => {
  return (
    <div className='flex flex-col gap-y-16 -mt-44'>
      <div className='flex justify-between items-center px-[300px]'>
        <div className='text-xl font-bold'>Select Year</div>
        <button className='text-[#00004F] border-2 rounded-md border-[#00004F] py-1 px-2'>View My Batchmates</button>
      </div>
      <div className='grid grid-cols-4 gap-x-8 gap-y-6 px-[400px]'>
        <Year batch = '2020' memberNum='1'/>
        <Year batch = '2021' memberNum='1'/>
        <Year batch = '2022' memberNum='1'/>
        <Year batch = '2023' memberNum='1'/>
        <Year batch = '2024' memberNum='1'/>
      </div>
    </div>
  )
}

export default yearbook