import NavButtonDropDown from './subComponents/NavButtonDropDown'
import NavButton from './subComponents/NavButton'

const Navbar = () => {
    return (
        <div className="flex justify-center items-center gap-x-20 py-2 bg-[#F13617] rounded-md mx-auto px-12 z-10 -mt-4 text-gray-200 font-semibold">
            <NavButton title='CAMPUSFEED'/>
            <NavButtonDropDown title='FIND ALUMNI' dropList={['Alumni Directory', 'Alumni NearBy']}/>
            <NavButton title='NOTICEBOARD'/>
            <NavButtonDropDown title='BATCHMATES' dropList={['YearBook', 'Invite Batchmates']} />
            <NavButtonDropDown title='CAREERS' dropList={['Jobs', 'Internships']} />
            <NavButtonDropDown title='ABOUT' dropList={['Team', 'About Us']} />
        </div>
    )
}

export default Navbar