import React, { Component } from 'react';
import axios from 'axios';

import Map from './map.js';
import SideBar from './sidebar.js';
import DistanceMenu from './distanceMenu.js';
import SortMenu from './sortMenu.js';

import '../../css/Home.css';

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      markers: [],
      latitude: "",
      longitude: "",
      userIP: "",
      distances: []
    }
  }

  componentDidMount() {
    axios
       .get("https://jsonip.com/")
       .then(res => {
         this.setState({
           userIP: res.data.ip
         });
         // console.log("ip: ", res.data.ip);
       })
       .then(() => {
         let apikey = "45c642a38d6e8f01dac07ba1f003505a";
         axios.get(`http://api.ipstack.com/${this.state.userIP}?access_key=${apikey}`)
                 .then(res => {
                   // console.log("result long/ lat!!!: ", res)
                   this.setState({
                     latitude: res.data.latitude,
                     longitude: res.data.longitude
                   })
                 })
                 .then(() => {
                        this.fetchLocation()
                        .then(() => {
                              this.getDistanceData(this.coordinateString())
                            })
                      })
       })
       .catch(err => {
         console.log(err)
       })
  }
  getDistanceData = (string) => {
    let {longitude, latitude} = this.state;
     axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${latitude},${longitude}&destinations=${string}&key=AIzaSyAm8VcTZZ0P2oJCVLZ4ZDy5RK2UYxMxDlc`)
     .then(res => {
       let normalizeDistance = res.data.rows[0].elements.map(el => {return el = el.distance.text})
       this.setState({
          distances: normalizeDistance
        });
     })
   }
  fetchLocation = () => {
    // console.log("fetchLocation!!!");
    return axios
      .get(
        `https://www.hikingproject.com/data/get-trails?lat=${this.state.latitude}&lon=${this.state.longitude}&maxDistance=10&key=200430061-384fefbb8ceed621af7cea7e5ab597b2`
      )
      .then(res => {
        // console.log("Res Hiking!!!!", res.data.trails);
        this.setState({
          markers: res.data.trails
        });
      })
      .catch(err => {
        console.log(err)
      })
  };
  coordinateString = () => {
    return this.state.markers.map(el=> {return el.latitude+"%2C"+el.longitude+"%7C"}).join('').slice(0,-3)
    // console.log("coorStr=>",output,this.state.markers);
  }

  render() {
    const {markers, latitude, longitude, userIP, distances} = this.state
    return (
      <React.Fragment>
        <div className="home-main-container">
          <SideBar distances={distances} trails={markers} currentLon={longitude} currentLat={latitude}/>
          <Map markers={markers} latitude={latitude} longitude={longitude} userIP={userIP}/>
          <DistanceMenu/>
          <SortMenu/>
        </div>

      </React.Fragment>
    )
  }
}
