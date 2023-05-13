import { useSession } from 'next-auth/react'

import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
    const { data: session, status } = useSession()

    return (
        <div className="layoutMain">
            <Header session={session} status={status} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout