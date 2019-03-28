import React from 'react';

const SortMenu = ({trails, handleSort}) => {

  return (
    <div className="sort-menu-container">
      <select defaultValue="1" onChange={handleSort}>
        <option disabled value="1">--SORT BY--</option>
        <option value="dif">Difficulty</option>
        <option value="dis">Distance To Trail</option>
        <option value="len">Length</option>
      </select>
    </div>
  )
}

export default SortMenu;
