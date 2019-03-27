import React from 'react'

const Info = (props) => {
    const {name, summary, trailLength, location, elevation, conditionDate, conditionStatus, conditionDetails, ascent} = props
  return (
    <>
      <div className="info-container">
        <div className="trail-name">
          <h1>{name}</h1>
        </div>
        <div className='info-location'>
          <h2>{location}</h2>
        </div>
        <div className="trail-summary">
           <h2>{summary}</h2>
        </div>
          <div className="trail-numbers">
            <p className='trail-length'>Trail Length: {trailLength} miles</p>
            <p className='trail-ascend'>Ascend: {ascent} feet</p>
            <p className ='trail-elevation'>Elevation: {elevation} feet</p>
            <h2> Current Trail Conditions</h2>
            <p className='condition-status'>{conditionStatus}</p>
            <p className='condition-details'>{conditionDetails}</p>
            <p className='condition-date'>{conditionDate}</p>
          </div>

      </div>
    </>
  )
}

export default Info
