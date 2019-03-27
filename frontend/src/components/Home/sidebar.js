import React from 'react';
import TrailTile from './trailTile.js';
import { Link } from 'react-router-dom';

const SideBar = ({props}) => {
  console.log("inside sidebar=>",props);
  let mapTiles;
  return (
    <div className="sidebar-container">
      <h1>sidebar</h1>
      <TrailTile/>
    </div>
  )
}

export default SideBar;
