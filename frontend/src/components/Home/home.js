import React, { Component } from 'react';
import axios from 'axios';

import Map from './map.js';
import SideBar from './sidebar.js';

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      markers: [],
      latitude: "",
      longitude: "",
      userIP: ""
    }
  }

  componentDidMount() {
    axios
       .get("https://jsonip.com/")
       .then(res => {
         this.setState({
           userIP: res.data.ip
         });
         console.log("ip: ", res.data.ip);
       })
       .then(() => {
         let apikey = "45c642a38d6e8f01dac07ba1f003505a";
         axios.get(`http://api.ipstack.com/${this.state.userIP}?access_key=${apikey}`)
                 .then(res => {
                   console.log("result long/ lat!!!: ", res)
                   this.setState({
                     latitude: res.data.latitude,
                     longitude: res.data.longitude
                   })
                 })
                 .then(() => {
                        this.fetchLocation()
                      })
       })
       .catch(err => {
         console.log(err)
       })
  }

  fetchLocation = () => {
    console.log("fetchLocation!!!");
    axios
      .get(
        `https://www.hikingproject.com/data/get-trails?lat=${this.state.latitude}&lon=${this.state.longitude}&maxDistance=10&key=200430061-384fefbb8ceed621af7cea7e5ab597b2`
      )
      .then(res => {
        console.log("Res Hiking!!!!", res.data.trails);
        this.setState({
          markers: res.data.trails
        });
      })
      .catch(err => {
        console.log(err)
      })
  };

  render() {
    return (
      <React.Fragment>
        <div className="main-container">
          <h1>Home</h1>
          <SideBar/>
          <Map/>
        </div>

      </React.Fragment>
    )
  }
}
