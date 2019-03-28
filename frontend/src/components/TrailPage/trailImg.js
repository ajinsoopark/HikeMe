import React from 'react'

import '../../css/trailImg.css'

const TrailImg = (props) => {
  const { imageUrl, trailUrl } = props
  return(
    <>
     {
      !imageUrl ?
        <img className='image' src='http://appalachiantrail.org/images/default-source/default-album/trailfocus.jpg?sfvrsn=2' alt='default-img'/>
        :
      <>
      <div>
        <div className="img-wrapper">
          <img className='image' src={imageUrl} alt='trail-img' />
        </div>
      </div>
      </>
    }
    <a href={trailUrl}>
     See A Map of This Trail
    </a>
    </>
  )
}


export default TrailImg
