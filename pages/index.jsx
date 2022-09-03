import Head from 'next/head'
import PhotoCarousel from '../components/PhotoCarousel'
import NotableAlumni from '../components/NotableAlumni.jsx'
import Info from '../components/Info'
import Submissions from '../components/Submissions'

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
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Home
