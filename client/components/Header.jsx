import { signIn, signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = ({ session, status }) => {
    const [sub, setSub] = useState(null)
    const [user, setUser] = useState(null)

    const router = useRouter();

    const handleSession = async() => {
        const subAdmin = localStorage.getItem("subAdminEmail")

        if(subAdmin)
            setSub(subAdmin)      
    }

    // const handleClick = () => {
    //     const email = session.user.email
    //     const name = session.user.name

    //     if(email) {
    //         router.query.email = email
    //         router.route = name
    //         router.push(router)
    //     }
    // }

    const getloginUser = () => {
        const data = localStorage.getItem("userData")
        
        if(data !== null)
            setUser(data)
    }

    useEffect(() => {
        handleSession()
        getloginUser()
    }, [])

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
                    {status !== 'authenticated' ? (
                        <button 
                            className='headerLinks'
                            onClick={() => signIn()}
                        >
                            SignUp / Login
                        </button>
                        ) : (
                            <div className='flex justify-center items-center gap-x-4'>
                                <button 
                                    className='flex items-center justify-center bg-[#1D3557] px-4 py-2 rounded-lg shadow-md shadow-blue-400 ease-in duration-500'
                                >
                                    {user ? (
                                        <Link href='/loginProfile'>
                                            {session.user.name}
                                        </Link>
                                    ) : (
                                        <Link href={`/${session.user.name}?email=${session.user.email}`}>
                                            {session.user.name}
                                        </Link>
                                    ) }
                                </button>
                                <button 
                                    className='flex items-center justify-center bg-red-800 px-8 py-2 rounded-lg shadow-md shadow-red-400 ease-in duration-500'
                                    onClick={() => signOut()}
                                >
                                    SignOut
                                </button>
                                {(session.user.email === 'abhinavpathaka17@gmail.com' || session.user.email === sub)
                                    && 
                                    <button 
                                        className='flex items-center justify-center bg-white px-8 py-2 rounded-lg shadow-md shadow-gray-400 text-black ease-in duration-500'
                                    >
                                    <Link href='/admin'>
                                        {session.user.email !== 'abhinavpathaka17@gmail.com' ? "SubAdmin" : "Admin"}
                                    </Link>
                                </button>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default Header