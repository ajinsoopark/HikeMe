import React from 'react'

import '../../css/stars.css'

const StarRating = ({ starRating, ratingCount }) => {
    
    return (
        <div className='starRatingContainer'>
            <p>
                <p className='ratingLabel'>
                    Rating: 
                </p>
                {Math.round(starRating)}
            </p>
            <div className='stars'>
                <svg className={ Math.round(starRating) >= 1 ? 'filledStar' : 'emptyStar' } xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                <svg className={ Math.round(starRating) >= 2 ? 'filledStar' : 'emptyStar' } xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                <svg className={ Math.round(starRating) >= 3 ? 'filledStar' : 'emptyStar' } xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                <svg className={ Math.round(starRating) >= 4 ? 'filledStar' : 'emptyStar' } xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                <svg className={ Math.round(starRating) >= 5 ? 'filledStar' : 'emptyStar' } xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                <p className='ratingCount'>
                    {`(${ratingCount})`}
                </p>
            </div>
        </div>
    )
}

export default StarRating