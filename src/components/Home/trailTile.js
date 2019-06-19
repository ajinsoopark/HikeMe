import React from 'react';
import Difficulty from '../TrailPage/difficulty';
import { withRouter } from 'react-router-dom'

const TrailTile  = ({props, currentLon, currentLat, difficulty, length, imgSqSmall, id, distance}) => {
  let defaultImg = "https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-512.png";
  let path = props.location.pathname

  return (
    <div className="tile-container">
      <img alt="trail" src={imgSqSmall ? imgSqSmall : defaultImg}/>
      <div className="tile-info">
        <p>Length: {length} miles</p>
        {/*<p>Difficulty: {difficulty}</p>*/}
        <div className="tile-difficulty"><p>Difficulty:</p><Difficulty path={path} difficulty={difficulty}/></div>
        <p>Distance: {distance}</p>
      </div>
    </div>
  )
}

export default withRouter(TrailTile);
// currentLon={currentLon}
// currentLat={currentLat}
// difficulty={trail.difficulty}
// length={trail.length}
// imgSqSmall={trail.imgSqSmall}
// id={trail.id}
