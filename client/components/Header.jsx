import Image from 'next/image'
import Navbar from './Navbar'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='z-10'>
            <div className="headerMain">
                <Link href='/'>
                    <div className='flex gap-x-4 justify-center items-center cursor-pointer'>
                        <Image
                            src="/gbpec.jpg"
                            alt="Picture of the college logo"
                            width={75}
                            height={75}
                        />
                        <div className='text-xl'>Alumni Association of G. B. Pant Institute of Engineering & Technology</div>
                    </div>
                </Link>
                <div>
                    <button className='headerLinks'>
                        <Link href='/signup'>
                            SIGN UP / LOGIN 
                        </Link>
                    </button>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default Header