import React from 'react'

const TrailImg = (props) => {
  const { imageUrl, trailUrl } = props
  return(
    <>
     {
      !imageUrl ?
        <img src='http://appalachiantrail.org/images/default-source/default-album/trailfocus.jpg?sfvrsn=2' />
        :
      <>
      <img className='image-url' src={imageUrl} />
      <form action={trailUrl}>
        <input type='submit' target='_blank' onclick={`window.open(${trailUrl}); return false`} value='See A Map of This Trail'  />
      </form>
      </>
    }
    </>
  )
}


export default TrailImg
