const NavButton = ({ title }) => {
    return (
        <div>
            <button className="flex gap-x-1 items-center">
                    <div>
                        {title}
                    </div>
                </button>
        </div>
    )
}

export default NavButton