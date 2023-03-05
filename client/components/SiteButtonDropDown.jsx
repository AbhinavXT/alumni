import { useState } from "react"
import { Link } from 'next/link'

const SiteButtonDropDown = ({ text, count, dropList }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    return (
        <div>
            <div className='siteButtonMain'
                onClick={() =>
                    dropdownOpen
                        ? setDropdownOpen(false)
                        : setDropdownOpen(true)
                    }
            >
                <div className='siteButtonText'>{text}</div>
                <div className='font-light text-right'>{count}</div>
                  
            </div>
                  
            <div className={`siteButtonDropdownMenu ${dropdownOpen ? "block" : "hidden"}`}>
                <ul className="siteButtonDropdownList" >
                    {dropList.map((item, i) =>   (
                        <Link key={i} href={item.path}>
                            <li onClick={() => setDropdownOpen(false)}>
                                <a href="#" className="siteButtonDropdownMenuTitle">{item.title}</a>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SiteButtonDropDown