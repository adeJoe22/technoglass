import React from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

// USE THIS COMPONENT FOR MAP

function Map() {
  const defaultProps = {
    center: {
      lat: 6.45802,
      lng: 3.44127,
    },
    zoom: 14,
  };
  return (
    <div style={{ height: '60vh', width: '90%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
