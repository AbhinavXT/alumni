import NavButtonDropDown from './subComponents/NavButtonDropDown'
import NavButton from './subComponents/NavButton'

const Navbar = () => {
    return (
        <div className="navbarMain">
            <NavButton title='NOTICEBOARD' path='/feed'/>

            <NavButton title='ALUMNI' path= '/directory' />

            <NavButton title='EVENTS' path= '/events' /> 
            
            <NavButton title='GALLARY' path= '/galleries' /> 

            <NavButton title='YEARBOOK' path='/yearbook' />

            <NavButton title='CAREER' path= '/careers' />

            <NavButtonDropDown title='ABOUT US' dropList={[
                {
                    title: 'Team',
                    path: '/team'
                }, 
                {
                    title: 'About Us',
                    path: '/aboutus'
                }
            ]}/>
        </div>
    )
}

export default Navbar