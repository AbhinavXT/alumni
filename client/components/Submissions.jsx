import SubSubmissions from './subComponents/SubSubmissions'

const Submissions = () => {
    const submissionsOne = [
        {
            image: '/s1.jpg',
            title: 'Become your Batch’s Ambassador',
            text: 'Extend the GBPIET Alumni Association Platform by becoming an Ambassador'
        },
        {
            image: '/s2.jpg',
            title: 'Spread the Word',
            text: 'Share this platform on your social media so that all your batch mates can join'
        },
        {
            image: '/s3.jpg',
            title: 'Write a Testimonial',
            text: 'Write a Testimonial if you wish to share your experience at the College for the world'
        },
        {
            image: '/s4.jpg',
            title: 'Share Career Opportunities',
            text: 'Is your organisation hiring new talent? Share career and internship opportunities'
        }
    ]

    const submissionsTwo = [
        {
            image: '/s5.jpg',
            title: 'Share your Success Story',
            text: 'Share your Success Story with the world and inspire others to achieve their dreams'
        },
        {
            image: '/s6.jpg',
            title: 'Share your Expertise',
            text: 'Share your Expertise with the world and inspire others to achieve their dreams'
        },
        {
            image: '/s7.jpg',
            title: 'Share your Entrepreneurial Story',
            text: 'Share Your Entrepreneurial Journey Story and Inspire All Fellow Alumni!'
        },
        {
            image: '/s8.jpg',
            title: 'Share your Creative Story',
            text: 'Share Your Creative Story and Inspire All Fellow Alumni!'
        }
    ]

    return (
        <div className='submissionsMain'>
            <div className='submissionsInnerDiv'>
                <div className='text-2xl font-bold'>Get Engaged</div>

                <div className='submissionsInnerDivText'>
                    {submissionsOne.map((item, i) => {
                        return (
                            <SubSubmissions 
                                key={i} 
                                image={item.image} 
                                title={item.title} 
                                text={item.text} 
                            />
                        )
                    })}
                </div>
            </div>

            <div className='submissionsInnerDiv'>
                <div className='text-2xl font-bold'>Submit Your Story</div>

                <div className='submissionsInnerDivText'>
                    {submissionsTwo.map((item, i) => {
                        return (
                            <SubSubmissions 
                                key={i} 
                                image={item.image} 
                                title={item.title} 
                                text={item.text} 
                            />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Submissions