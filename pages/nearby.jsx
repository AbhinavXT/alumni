import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '2000px',
  height: '650px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const nearby = () => {
  return (
    <div className='flex justify-center items-center'>
      <LoadScript
        googleMapsApiKey="YOUR_API_KEY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default nearby