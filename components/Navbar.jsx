import NavButtonDropDown from './subComponents/NavButtonDropDown'
import NavButton from './subComponents/NavButton'

const Navbar = () => {
    return (
        <div className="flex justify-center items-center gap-x-20 py-2 bg-[#F13617] rounded-md mx-[400px] px-12 z-10 -mt-4 text-gray-200 font-semibold">
            <NavButton title='CAMPUSFEED' path='/feed' />

            <NavButtonDropDown title='FIND ALUMNI' dropList={[
                {
                    title: 'Alumni Directory',
                    path: '/directory'
                }, 
                {
                    title: 'Alumni NearBy',
                    path: '/nearby'
                }
            ]}/>

            <NavButton title='NOTICEBOARD' path='/noticeboard' />

            <NavButtonDropDown title='EVENTS' dropList={[
                {
                    title: 'Events',
                    path: '/events'
                }, 
                {
                    title:'Galleries',
                    path: '/galleries'
                }
            ]} />

            <NavButtonDropDown title='BATCHMATES' dropList={[
                {
                    title: 'YearBook',
                    path: '/yearbook'
                }, 
                {
                    title:'Invite Batchmates',
                    path: '/invite'
                }
            ]} />

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
            ]} />
        </div>
    )
}

export default Navbar