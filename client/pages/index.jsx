import Head from 'next/head'
import PhotoCarousel from '../components/PhotoCarousel'
import NotableAlumni from '../components/NotableAlumni.jsx'
import Info from '../components/Info'
import Submissions from '../components/Submissions'
import Events from '../components/Events'
import Albums from '../components/Albums'
import Memories from '../components/Memories'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <div className="flex min-h-screen flex-col items-center py-2">
            <Head>
                <title>Official Community of Govind Ballabh Pant Institute of Engineering &amp; Technology</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='-mt-8'>
                <PhotoCarousel />
            </div>
            
            <div>
                <NotableAlumni />
            </div>
            
            <div>
                <Info />
            </div>
            
            <div>
                <Submissions />
            </div>
            
            <div>
                <Events />
            </div>

            <div>
                <Albums />
            </div>

            <div>
                <Memories />
            </div>

            <div>
                <Contact />
            </div>
        </div>
    )
}

export default Home
