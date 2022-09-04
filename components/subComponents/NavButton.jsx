import Link from 'next/link'

const NavButton = ({ title, path }) => {
    return (
        <div>
            <button className="flex gap-x-1 items-center">
                <Link href={path}>
                    <div>
                        {title}
                    </div>
                </Link>
                </button>
        </div>
    )
}

export default NavButton