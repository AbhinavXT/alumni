import NavButtonDropDown from './subComponents/NavButtonDropDown'
import NavButton from './subComponents/NavButton'

const Navbar = () => {
    return (
        <div className="navbarMain">
            <NavButton title='CAMPUSFEED' path='/feed'/>

            <NavButtonDropDown title='FIND ALUMNI' dropList={[
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

            <NavButtonDropDown title='CAREERS' dropList={[
                {
                    title: 'Jobs',
                    path: '/careers'
                }, 
                {
                    title: 'Internships',
                    path: '/careers'
                }
            ]}/>

            <NavButtonDropDown title='ABOUT' dropList={[
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