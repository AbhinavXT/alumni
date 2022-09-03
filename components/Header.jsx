import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex bg-[#00004F] justify-center items-center gap-x-60 text-gray-200 pt-4 pb-8">
        <div className='flex gap-x-4 justify-center items-center'>
            <div>
                <Image
                    src="/gbpec.jpg"
                    alt="Picture of the college logo"
                    width={75}
                    height={75}
                />
            </div>
            <div className='text-xl'>Alumni Association of G. B. Pant Institute of Engineering & Technology</div>
        </div>
        <div>
            <button className='flex items-center justify-center bg-[#20205F] px-4 py-2 rounded-lg'>
                SIGN UP / LOGIN 
            </button>
        </div>
    </div>
  )
}

export default Header