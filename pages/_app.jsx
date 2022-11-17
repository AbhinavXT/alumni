import '../styles/globals.css'
import Layout from '../components/Layout.jsx'

function MyApp({ Component, pageProps }) {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}

export default MyApp