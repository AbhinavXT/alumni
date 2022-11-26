import { useState } from "react"

import SiteButtonAdmin from "../components/admin/SiteButtonAdmin"
import SiteButton from "../components/SiteButton"

import Dashboard from "../components/admin/Dashboard"
import Users from "../components/admin/Users"
import Students from "../components/admin/Students"
import Alumni from "../components/admin/Alumni"
import Staff from "../components/admin/Staff"
import Requests from "../components/admin/Requests"
import Assign from "../components/admin/Assign"
import SubAdmin from "../components/admin/SubAdmin"
import SubAdminRequest from "../components/admin/SubAdminRequest"

const admin = () => {
    const [component, setComponent] = useState(0)

    const changeCompoenet = (comp) => {
        setComponent(comp)
    }

    return (
        <div className="flex justify-center gap-x-12 my-16">
            <div className="flex flex-col gap-y-8 font-bold">
                <div className='flex text-2xl'>
                    Admin Dashboard
                </div>
                <div className="flex flex-col gap-y-4">
                    <button onClick={() => changeCompoenet(0)}>
                        <SiteButtonAdmin text='Dashboard'/>
                    </button>
                    <button onClick={() => changeCompoenet(1)}>
                        <SiteButton text='Users' count='0' />
                    </button>
                    <button onClick={() => changeCompoenet(2)}>
                        <SiteButton text='Students' count='0' />
                    </button>
                    <button onClick={() => changeCompoenet(3)}>
                        <SiteButton text='Alumni' count='0' />
                    </button>
                    <button onClick={() => changeCompoenet(4)}>
                        <SiteButton text='Staff' count='0' />
                    </button>
                    <button onClick={() => changeCompoenet(5)}>
                        <SiteButton text='Requests' count='0' />
                    </button>
                    <button onClick={() => changeCompoenet(6)}>
                        <SiteButtonAdmin text='Assign Roles' />
                    </button>
                    <button onClick={() => changeCompoenet(7)}>
                        <SiteButtonAdmin text='Sub Admin' />
                    </button>
                    <button onClick={() => changeCompoenet(8)}>
                        <SiteButtonAdmin text='Sub Admin Requests' />
                    </button>
                </div>
            </div>

            {component === 0 && <Dashboard />}
            {component === 1 && <Users />}
            {component === 2 && <Students />}
            {component === 3 && <Alumni />}
            {component === 4 && <Staff />}
            {component === 5 && <Requests />}
            {component === 6 && <Assign />}
            {component === 7 && <SubAdmin />}
            {component === 8 && <SubAdminRequest />}
        </div>
    )
}

export default admin