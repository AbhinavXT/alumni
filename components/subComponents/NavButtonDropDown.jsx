import { useState } from "react"

const NavButtonDropDown = ({ title, dropList }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    return (
        <div>
            <button className="flex gap-x-1 items-center"
                onClick={() =>
                    dropdownOpen
                        ? setDropdownOpen(false)
                        : setDropdownOpen(true)
                }
            >
                <div>
                    {title}
                </div>
                <div>
                    <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </button>
            <div className={`bg-gray-100 text-base z-20 absolute list-none rounded-sm shadow my-2 -mx-32 w-60 ${dropdownOpen ? "block" : "hidden"}`}>
                <ul className="text-center py-1 divide-y-2" >
                    {dropList.map((item, i) => (
                        <li key={i}>
                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavButtonDropDown