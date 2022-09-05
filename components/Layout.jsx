import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col justify-between bg-[#e5e5e5]">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout