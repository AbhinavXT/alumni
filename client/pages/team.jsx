import Head from 'next/head'
import Image from 'next/image'

const team = () => {
    const members = [
        {
            name: 'Chandraveer Singh',
            post: 'Secretary',
            image: '/t2.jpg'
        },
        {
            name: 'Dr. Yatindra Kumar',
            post: 'Vice President',
            image: '/t3.jpg'
        },
        {
            name: 'Dr. Shashi Kant Verma',
            post: 'President',
            image: '/t4.jpg'
        },
        {
            name: 'Prof. V.N. Kala',
            post: 'Director & Patron',
            image: '/dir.jpg'
        }
    ]

    return (
        <div className='teamMain'>
            <Head>
                <title>GBPEC Alumni Team</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='text-3xl'>GBPIET Alumni Association Committee</div>
            <div className='flex gap-x-16'>
                {members.map((member, index) => {
                    return (
                        <div className='flex flex-col gap-y-4' key={index}>
                            <Image
                                src={member.image}
                                alt="Picture of the college logo"
                                width={120}
                                height={150}
                            />
            
                            <div className='text-center'>
                                <div className='font-bold text-lg'>{member.name}</div>
                                <div>{member.post}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default team