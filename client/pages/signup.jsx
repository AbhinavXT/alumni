import { signIn } from 'next-auth/react'

import Image from 'next/image'
import Head from 'next/head';

const signup = () => {
    return (
        <div className='signUpMain'>
            <Head>
                <title>Signup</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='signUpHeader'>Signup / Login</div>

            <div className='signUpImageOuterDiv'>
                <div className='signUpImageInnerDiv'>
                    <div>
                        <Image
                            src="/gbpec.jpg"
                            alt="Picture of the college logo"
                            width={120}
                            height={120}
                        />
                    </div>

                    <div className='text-2xl font-light'>Alumni Association of <div>G. B Pant Institute of <div>Engineering & Technology</div></div></div>

                    <div className='font-light'>Sign up or log in to stay <div>connected with your community</div></div>
                </div>

                <div className='signUpButtonOuterDiv'>
                    <div className='signUpButtonInnerDiv'>
                        <button 
                            className='signUpButton bg-[#1D3557]'
                            onClick={() => signIn()}
                        >
                            SignUp / Login
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default signup