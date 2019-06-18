import React from "react"

const DistanceMenu = (props) => {
  return (
    <div className="distance_select_container">
    <label htmlFor='distanceSelector'>Distance:</label>
    <select id='distanceSelector' onChange={props.selectDistance}>
    <option value="0" name="distance_option">0 Miles</option>
    <option value="5" name="distance_option">5 Miles</option>
    <option value="10" name="distance_option" selected="selected">10 Miles</option>
    <option value="20" name="distance_option">20 Miles</option>
    <option value="50" name="distance_option">50 Miles</option>
    <option value="100" name="distance_option">100 Miles</option>
    </select>
    </div>
  )
}

export default DistanceMenu
