import NavButtonDropDown from './subComponents/NavButtonDropDown'
import NavButton from './subComponents/NavButton'

const Navbar = () => {
    return (
        <div className="navbarMain">
            <NavButton title='FEED' path='/feed'/>

            <NavButtonDropDown title='ALUMNI NETWORK' dropList={[
                {
                    title: 'Alumni Directory',
                    path: '/directory'
                }, 
                {
                    title: 'Alumni Nearby',
                    path: '/nearby'
                }
            ]}/>

            <NavButton title='NOTICEBOARD' path='/noticeboard'/>

            <NavButtonDropDown title='EVENTS' dropList={[
                {
                    title: 'Events',
                    path: '/events'
                }, 
                {
                    title:'Galleries',
                    path: '/galleries'
                }
            ]}/>

            <NavButtonDropDown title='BATCHMATES' dropList={[
                {
                    title: 'YearBook',
                    path: '/yearbook'
                }, 
                {
                    title:'Invite Batchmates',
                    path: '/invite'
                }
            ]}/>

            <NavButtonDropDown title='CAREER' dropList={[
                {
                    title: 'Jobs',
                    path: '/careers'
                }, 
                {
                    title: 'Internships',
                    path: '/careers'
                }
            ]}/>

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