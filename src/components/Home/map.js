import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const API_KEY = process.env.GOOGLE_API_KEY

// import {Link} from "react-router-dom"

const Map = props => {
  let { markers, latitude, longitude, distanceChoice } = props;
  const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={distanceChoice < 50 ? 10 : 7}
        defaultCenter={{ lat: Number(latitude), lng: Number(longitude) }}
      >
        {markers.map(marker => {
          return (
            <Marker
              position={{ lat: marker.latitude, lng: marker.longitude }}
              key={marker.id}
            />
          );
        })}
      </GoogleMap>
    ))
  );

  // let time = new Date(Date.now());
  // time = time.toString();

  return (
    <div className="map-container">
    <MyMapComponent
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%`, width: '100%' }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    </div>
  );
};

export default Map;
