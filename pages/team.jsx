import Image from 'next/image'

const team = () => {
  return (
    <div className='flex flex-col gap-y-16 -mt-80 mx-[450px]'>
      <div className='text-3xl'>GBPIET Alumni Association Committee</div>
      <div className='flex gap-x-16'>
        <div className='flex flex-col gap-y-4'>
          <Image
            src="/t1.jpg"
            alt="Picture of the college logo"
            width={120}
            height={150}
          />

          <div className='text-center'>
            <div className='font-bold text-lg'>Dr. Sanjeev Naithani</div>
            <div>Treasurer</div>
          </div>
        </div>

        <div className='flex flex-col gap-y-4'>
          <Image
            src="/t2.jpg"
            alt="Picture of the college logo"
            width={120}
            height={150}
          />

          <div className='text-center'>
            <div className='font-bold text-lg'>Chandraveer Singh</div>
            <div>Secretary</div>
          </div>
        </div>

        <div className='flex flex-col gap-y-4'>
          <Image
            src="/t3.jpg"
            alt="Picture of the college logo"
            width={120}
            height={150}
          />

          <div className='text-center'>
            <div className='font-bold text-lg'>Dr. Yatindra Kumar</div>
            <div>Vice President</div>
          </div>
        </div>

        <div className='flex flex-col gap-y-4'>
          <Image
            src="/t4.jpg"
            alt="Picture of the college logo"
            width={120}
            height={150}
          />
          <div className='text-center'>
            <div className='font-bold text-lg'>Dr. Shashi Kant Verma</div>
            <div>President</div>
          </div>
        </div>
        <div className='flex flex-col gap-y-4'>
          <Image
            src="/t5.jpg"
            alt="Picture of the college logo"
            width={120}
            height={150}
          />
          <div className='text-center'>
            <div className='font-bold text-lg'>Prof. M.P.S. Chauhan</div>
            <div>Director & Patron</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default team