import { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const nearby = () => {
    const location = {
        center: {
          lat: 30.1830,
          lng: 78.6952
        },
        zoom: 13
    };

    return (
        <div className='min-w-full h-[44rem] -my-6'>
            <GoogleMapReact
                defaultCenter={location.center}
                defaultZoom={location.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
        </div>
    )
}

export default nearby