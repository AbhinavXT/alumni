import Image from 'next/image'

const invite = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-8 divide-y divide-gray-900 bg-gray-100 mx-auto my-6 px-20 py-12 rounded-md'>
        <div className='flex flex-col gap-y-4 text-center'>
            <div>
                <Image
                    src="/gbpec.jpg"
                    alt="Picture of the college logo"
                    width={150}
                    height={150}
                />
            </div>
            
            <div className='font-semibold text-xl'>Invite your friends from class of '2023'</div>
        </div>

      
        <div className='flex flex-col gap-y-4 py-6'>
            <button className='flex items-center justify-center text-lg gap-x-2 text-center py-2 px-12 bg-[#E53935] rounded-md text-gray-200'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                </div>
                Invite with Gmail 
            </button>

            <button className='flex items-center justify-center text-lg gap-x-2 text-center py-2 px-12 bg-[#365899] rounded-md text-gray-200'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>  
                </div>
                Invite with Facebook
            </button>

            <button className='flex items-center justify-center text-lg gap-x-2 text-center py-2 px-12 bg-[#1EBEA5] rounded-md text-gray-200'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg> 
                </div>
                Invite with Whatsapp
            </button>
        </div>

        <div className='bg-gray-900 text-gray-200 rounded-full p-2'>OR</div>

        <div className='flex flex-col gap-y-4 items-center justify-center text-center pt-6'>
            <div>Send invite if you know their email</div>

            <div>
                <form action="submit" className='flex flex-col items-center justify-center gap-y-4'>
                    <input className="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
                    <input className="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                    <input className="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Batch" />

                    <button className='flex py-2 px-6 bg-[#00004F] w-24 rounded-md text-gray-200'>
                        Invite
                    </button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default invite