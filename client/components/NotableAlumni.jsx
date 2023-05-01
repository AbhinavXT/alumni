import Image from 'next/image'

const NotableAlumni = () => {
    return (
        <div className='flex justify-center items-center gap-x-4 py-12 px-96'>
            <div className='flex flex-col border-2 border-black px-4 rounded-md py-2 gap-y-4 bg-gray-300 shadow-lg'>
                <div className='text-xl font-bold py-2'>ABOUT GBPIET</div>
                <div className='flex items-center justify-center'>
                    <iframe
                        width="500"
                        height="200"
                        src="https://www.youtube.com/watch?v=99TFz9bfmoo&t"
                        title="Embedded youtube"
                    >
                    </iframe>
                </div>
                <div>
                    Govind Ballabh Pant Institute of Engineering and Technology, Pauri Garhwal (GBPIET) 
                    is an Institute with total commitment to quality and excellence in academic pursuits. 
                    The College was established in 1989, as an autonomous body, with a view to fulfil the 
                    ever-growing demand for well-trained professionals. It is one of the few premier colleges 
                    imparting technical education in the state of Uttarakhand.
                </div>
                <button className='bg-[#010673] w-32 p-2 rounded-md text-center text-gray-200 font-bold'>Read More</button>
            </div>

            <div className='flex flex-col border-2 border-black px-4 rounded-md py-2 gap-y-4 bg-gray-300 shadow-lg'>
                <div className='text-xl font-bold py-2'>DIRECTOR'S MESSAGE</div>
                <div className='flex items-center justify-center'>
                    <Image
                        src="/dir.jpg"
                        alt="Picture of the director"
                        width={220}
                        height={200}
                    />
                </div>
                <div>
                    It is my great privilege to welcome you to the Govind Ballabh Pant Institute of Engineering & 
                    Technology, Pauri Garhwal and invite you to explore the multidimensional facets of this 
                    Engineering College using the official website. The College's strengths and standing are best 
                    evidenced by the high quality of the students admitted in various programs and well qualified 
                    faculty. 
                </div>
                <button className='bg-[#010673] w-32 p-2 rounded-md text-center text-gray-200 font-bold'>Read More</button>
            </div>
        </div>
    )
}

export default NotableAlumni