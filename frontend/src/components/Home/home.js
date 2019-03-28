import React, { Component } from "react";
import axios from "axios";

import Map from "./map.js";
import SideBar from "./sidebar.js";
import DistanceMenu from "./distanceMenu.js";
import SearchBox from "./searchbox.js";
// import SortMenu from './sortMenu.js';

import "../../css/Home.css";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      markers: [],
      latitude: "",
      longitude: "",
      userIP: "",
      distances: [],
      distanceChoice: 10,
      searchInput: ""
    };
  }

  componentDidMount() {
    console.log("triggered did mount");
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
        axios
          .get(
            `http://api.ipstack.com/${this.state.userIP}?access_key=${apikey}`
          )
          .then(res => {
            // console.log("result long/ lat!!!: ", res)
            this.setState({
              latitude: res.data.latitude,
              longitude: res.data.longitude
            });
          })
          .then(() => {
            this.fetchLocation().then(() => {
              this.getDistanceData(this.coordinateString());
            });
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getDistanceData = string => {
    let { longitude, latitude, markers } = this.state;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${latitude},${longitude}&destinations=${string}&key=AIzaSyAm8VcTZZ0P2oJCVLZ4ZDy5RK2UYxMxDlc`
      )
      .then(res => {
        let normalizeDistance = res.data.rows[0].elements.map(el => {
          return (el = el.distance.text);
        });
        let addedDistance = markers.slice();
        addedDistance.forEach((trail, i) => {
          trail.distance = normalizeDistance[i];
        });
        this.setState({
          markers: addedDistance
        });
      });
  };

  fetchLocation = () => {
    // console.log("fetchLocation!!!");
    return axios
      .get(
        `https://www.hikingproject.com/data/get-trails?lat=${
          this.state.latitude
        }&lon=${this.state.longitude}&maxDistance=${
          this.state.distanceChoice
        }&key=200430061-384fefbb8ceed621af7cea7e5ab597b2`
      )
      .then(res => {
        this.setState({
          markers: res.data.trails
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  coordinateString = () => {
    return this.state.markers
      .map(el => {
        return el.latitude + "%2C" + el.longitude + "%7C";
      })
      .join("")
      .slice(0, -3);
    // console.log("coorStr=>",output,this.state.markers);
  };

  handleSort = e => {
    // dif dis len
    switch (e.target.value) {
      case "dif":
      case "dis":
      case "len":
      default:
        break;
    }
  };

  selectDistance = async event => {
    console.log("selected distance");
    await this.setState({
      distanceChoice: Number(event.target.value)
    });
    await this.fetchLocation();
    await this.getDistanceData(this.coordinateString());
  };

  searchCoordinates = (event) => {
    event.preventDefault()
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.searchInput}&key=AIzaSyAm8VcTZZ0P2oJCVLZ4ZDy5RK2UYxMxDlc`
      )
      .then(res => {
        console.log(res)
        this.setState({
          latitude: res.data.results[0].geometry.location.lat,
          longitude: res.data.results[0].geometry.location.lng,
          searchInput: ""
        });
      })
      .then(() => {
        this.fetchLocation().then(() => {
          this.getDistanceData(this.coordinateString());
        });
      });
  };

  handleSearchInput = event => {
    event.preventDefault();
    console.log("target!!!!", event.target.value);
    this.setState({
      searchInput: event.target.value
    });
  };

  render() {
    const {
      markers,
      latitude,
      longitude,
      userIP,
      distances,
      distanceChoice
    } = this.state;
    return (
      <React.Fragment>
        <div className="home-main-container">
          <SearchBox
            handleSearchInput={this.handleSearchInput}
            searchCoordinates={this.searchCoordinates}
            searchInput={this.state.searchInput}
          />
          <SideBar
            distances={distances}
            trails={markers}
            currentLon={longitude}
            currentLat={latitude}
          />
          <Map
            markers={markers}
            latitude={latitude}
            longitude={longitude}
            userIP={userIP}
            distanceChoice={distanceChoice}
          />
          <DistanceMenu selectDistance={this.selectDistance} />
        </div>
      </React.Fragment>
    );
  }
}
