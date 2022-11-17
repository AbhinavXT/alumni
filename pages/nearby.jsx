import GoogleMapReact from 'google-map-react';

const Marker = () =>  {
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    </svg>
}

const nearby = () => {
    const location = {
        center: {
            lat: 30.1830,
            lng: 78.6952
        },
        zoom: 15
    };

    return (
        <div className='min-w-full h-[44rem] -my-6'>
            <GoogleMapReact
                defaultCenter={location.center}
                defaultZoom={location.zoom}
            >
                <Marker
                    lat={30.1830}
                    lng={78.6952}
                />
            </GoogleMapReact>
        </div>
    )
}

export default nearby