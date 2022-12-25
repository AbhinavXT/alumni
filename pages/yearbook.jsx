import Year from '../components/Year'

const yearbook = () => {
  return (
    <div className='flex flex-col gap-y-16 -mt-44'>
      <div className='flex justify-between items-center px-[300px]'>
        <div className='text-xl font-bold'>Select Year</div>
        <button className='text-[#00004F] border-2 rounded-md border-[#00004F] py-1 px-2 hover:bg-[#00004F] hover:text-gray-200 ease-in duration-300'>View My Batchmates</button>
      </div>
      <div className='grid grid-cols-4 gap-x-8 gap-y-6 px-[400px]'>
        <Year batch = '2018' memberNum='21'/>
        <Year batch = '2019' memberNum='19'/>
        <Year batch = '2020' memberNum='20'/>
        <Year batch = '2021' memberNum='25'/>
        <Year batch = '2022' memberNum='21'/>
        <Year batch = '2023' memberNum='19'/>
        <Year batch = '2024' memberNum='20'/>
        <Year batch = '2025' memberNum='18'/>
      </div>
    </div>
  )
}

export default yearbook