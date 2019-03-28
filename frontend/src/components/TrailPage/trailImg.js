import React from 'react'

const TrailImg = (props) => {
  const { imageUrl, trailUrl } = props
  return(
    <>
     {
      !imageUrl ?
        <img src='http://appalachiantrail.org/images/default-source/default-album/trailfocus.jpg?sfvrsn=2' alt='default-img'/>
        :
      <>
        <img className='image-url' src={imageUrl} alt='trail-img' />
      </>
    }
    <a href={trailUrl}>
     See A Map of This Trail
    </a>
    </>
  )
}


export default TrailImg
