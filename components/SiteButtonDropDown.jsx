import { useState } from "react"
import { Link } from 'next/link'

const SiteButtonDropDown = ({ text, count, dropList }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    return (
        <div>
            <div className='flex justify-between py-4 px-8 bg-gray-300 text-lg rounded-sm cursor-pointer'
                onClick={() =>
                    dropdownOpen
                        ? setDropdownOpen(false)
                        : setDropdownOpen(true)
                    }
            >
                <div className='font-bold text-left pr-36'>{text}</div>
                <div className='font-light text-right'>{count}</div>
                  
            </div>
                  
            <div className={`bg-gray-100 text-base z-20 absolute list-none rounded-sm shadow my-2 -mx-32 w-60 ${dropdownOpen ? "block" : "hidden"}`}>
                <ul className="text-center py-1 divide-y-2" >
                    {dropList.map((item, i) =>   (
                        <Link key={i} href={item.path}>
                            <li onClick={() => setDropdownOpen(false)}>
                                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">{item.title}</a>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SiteButtonDropDown