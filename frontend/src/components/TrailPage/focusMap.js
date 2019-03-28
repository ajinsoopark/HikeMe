import React from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"



const FocusMap = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg&v=3.exp&libraries=geometry,drawing,places/",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )((props) =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: Number(props.latitude), lng: Number(props.longitude) }}
      >
        {<Marker position={{ lat: props.latitude, lng: props.longitude }} onClick={props.onMarkerClick} />}
      </GoogleMap>
    )

    class MyFancyComponent extends React.PureComponent {
      state = {
        isMarkerShown: false,
      }

      componentDidMount() {
        this.delayedShowMarker()
      }

      delayedShowMarker = () => {
        setTimeout(() => {
          this.setState({ isMarkerShown: true })
        }, 100)
      }

      handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
      }

      render() {
        return (
          <FocusMap
            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick}
          />
        )
      }
    }


export default FocusMap
