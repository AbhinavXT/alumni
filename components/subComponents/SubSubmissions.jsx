import Image from 'next/image'

const SubSubmissions = ({image, title, text}) => {
    return (
        <div className='flex items-center gap-x-4'>
            <div>
                <Image
                    src={image}
                    className='rounded-full'
                    alt="Picture of the college"
                    width={70}
                    height={70}
                />
            </div>

            <div className='flex flex-col gap-y-1'>
                <div className='font-bold text-xl'>{title}</div>
                <div className='text-sm'>
                    {text}
                </div>
            </div>
        </div>
    ) 
}

export default SubSubmissions