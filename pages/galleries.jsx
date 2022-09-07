import SiteButton from "../components/SiteButton"

const events = () => {
  return (
    <div className="flex justify-center gap-x-12 -mt-96">
        <div className="flex flex-col gap-y-8 font-bold">
            <div className="text-2xl font-light">GALLERY CATEGORIES</div>
            <div className="flex flex-col gap-y-4">
                <SiteButton text='All ' count='0' />
                <SiteButton text='Categories' count='0' />
                <SiteButton text='Created by me' count='0' />
            </div>
        </div>
        
        <div className="flex justify-center items-center bg-gray-300 px-64 py-4 h-12 rounded-sm mt-1">No more gallaries to display!</div>
    </div>
  )
}

export default events