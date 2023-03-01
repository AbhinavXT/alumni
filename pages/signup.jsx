import Image from 'next/image'
import axios from 'axios'

const signup = () => {
    const linkedin = async() => {
        console.log('1')
        
        try{

            const login = await fetch(
                "https://api.linkedin.com/v2/me",
                {
                    method: "GET"
                }
            )
            
            const response = await response.json()
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className='signUpMain'>
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
                    <div className='text-lg font-light'>Choose any one of the following to Signup/Login</div>
                    <div className='signUpButtonInnerDiv'>
                        <button 
                            className='signUpButton bg-[#365899]'
                        >
                            <a href="https://www.linkedin.com/login" target="_blank">
                                Connect with LinkedIn
                            </a>
                        </button>
                        <button 
                            className='signUpButton bg-[#E53935]'
                        >
                            <a href="https://accounts.google.com/v3/signin/" target="_blank">
                                Connect with Gmail
                            </a>
                        </button>
                        <button 
                            className='signUpButton bg-[#039BE5]'
                        >
                            <a href="https://twitter.com/login" target="_blank">
                                Connect with Twitter
                            </a>
                        </button>
                    </div>
                    <div className='bg-gray-900 text-gray-200 rounded-full p-2'>OR</div>

                    <div className='signUpFormMain'>
                        <form action="submit">
                            <input className="signUpFormInput" id="username" type="text" placeholder="Enter your email" />
                        </form>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default signup