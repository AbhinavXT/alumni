import { SessionProvider } from "next-auth/react"

import '../styles/globals.css'
import Layout from '../components/Layout.jsx'

function MyApp({ Component, pageProps, session }) {
    return (
        <SessionProvider session = {session}>
            <div className="min-h-screen overflow-x-hidden">
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </div>
        </SessionProvider>
    )
}

export default MyApp