import React from 'react';
import Difficulty from '../TrailPage/difficulty';

const TrailTile  = ({currentLon, currentLat, difficulty, length, imgSqSmall, id, distance}) => {

  let defaultImg = "https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-512.png";

  return (
    <div className="tile-container">
      <img alt="trail" src={imgSqSmall ? imgSqSmall : defaultImg}/>
      <div className="tile-info">
        <p>Length: {length} miles</p>
        {/*<p>Difficulty: {difficulty}</p>*/}
        <p className="tile-difficulty">Difficulty:<Difficulty difficulty={difficulty}/></p>
        <p>Distance: {distance}</p>
      </div>
    </div>
  )
}

export default TrailTile;
// currentLon={currentLon}
// currentLat={currentLat}
// difficulty={trail.difficulty}
// length={trail.length}
// imgSqSmall={trail.imgSqSmall}
// id={trail.id}
