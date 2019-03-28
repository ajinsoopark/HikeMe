import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const FocusMap = props => {
    let { latitude, longitude } = props;
    const MyMapComponent = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: Number(latitude), lng: Number(longitude) }}>
            {<Marker position={{ lat: Number(latitude), lng: Number(longitude) }}/>}
        </GoogleMap>
      ))
);

let time = new Date(Date.now());
time = time.toString();

return (
  <div className="map-container">
  <MyMapComponent
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
  </div>
);
};


export default FocusMap

