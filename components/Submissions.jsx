import SubSubmissions from './subComponents/SubSubmissions'

const Submissions = () => {
  return (
    <div className='flex px-72 py-10 gap-x-32'>
        <div className='flex flex-col gap-y-6'>
            <div className='text-2xl font-bold'>Get Engaged</div>
            
            <div className='flex flex-col gap-y-4'>
                <SubSubmissions
                    image='/s1.jpg' 
                    title='Become your Batch’s Ambassador' 
                    text='Extend the GBPIET Alumni Association Platform by becoming an Ambassador'
                />
                <SubSubmissions
                    image='/s2.jpg' 
                    title='Spread the Word' 
                    text='Share this platform on your social media so that all your batch mates can join'
                />
                <SubSubmissions
                    image='/s3.jpg' 
                    title='Write a Testimonial' 
                    text='Write a Testimonial if you wish to share your experience at the College for the world'
                />
                <SubSubmissions
                    image='/s4.jpg' 
                    title='Share Career Opportunities' 
                    text='Is your organisation hiring new talent? Share career and internship opportunities'
                />
            </div>
        </div>

        <div className='flex flex-col gap-y-6'>
            <div className='text-2xl font-bold'>Submit Your Story</div>
            
            <div className='flex flex-col gap-y-4'>
                <SubSubmissions
                    image='/s5.jpg' 
                    title='Story: Friends for Life' 
                    text='Share your friendship stories with us and get featured on the Alumni Network’s publication'
                />
                <SubSubmissions
                    image='/s6.jpg' 
                    title='Story: My First Job' 
                    text='Share the story of your first job with us and tell us about your experience'
                />
                <SubSubmissions
                    image='/s7.jpg' 
                    title='Share Your Entrepreneurial Story                    ' 
                    text='Share Your Entrepreneurial Journey Story and Inspire All Fellow Alumni!'
                />
                <SubSubmissions
                    image='/s8.jpg' 
                    title='Creative Stories' 
                    text='Selected stories will be highlighted on the alumni portal for all alumni to see.'
                />
            </div>
        </div>
        
    </div>
  )
}

export default Submissions