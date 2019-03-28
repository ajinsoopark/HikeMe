import React, { Component } from 'react'
import axios from 'axios';

import Info from './info'
// import TrailImg from './trailImg'
// import StarRating from './starRating'
import Difficulty from './difficulty'
import FocusMap from './focusMap'

import '../../stylesheets/trailMain.css'

class TrailMain extends Component {
    constructor () {
        super ()
        this.state = {
            name: '',
            summary: '',
            difficulty: '',
            starRating: '',
            ratingCount: '',
            trailLength: '',
            location: '',
            imageUrl: '',
            conditionDetails: '',
            conditionStatus: '',
            conditionDate: '',
            trailUrl: '',
            ascent: '',
            elevation: '',
            latitude: '',
            longitude: ''
        }
    }

    componentDidMount () {
        this.fetchTrailInfo()
    }

    fetchTrailInfo () {
        if (this.props) {
            let trailId = this.props.match.path.id
            trailId = 7000108
            axios.get(`https://www.hikingproject.com/data/get-trails-by-id?ids=${trailId}&key=200430061-384fefbb8ceed621af7cea7e5ab597b2`)
            .then(res => {
                console.log(res.data.trails)
                let trail = res.data.trails[0]
                this.setState({
                    name: trail.name,
                    summary: trail.summary,
                    difficulty: trail.difficulty,
                    starRating: trail.stars,
                    ratingCount: trail.starVotes,
                    trailLength: trail.length,
                    location: trail.location,
                    imageUrl: trail.imgMedium,
                    conditionDetails: trail.conditionDetails,
                    conditionStatus: trail.conditionStatus,
                    conditionDate: trail.conditionDate,
                    trailUrl: trail.url,
                    ascent: trail.ascent,
                    elevation: trail.high,
                    latitude: trail.latitude,
                    longitude: trail.longitude
                })
            }).catch(err => console.log(err))
        }
    }

    render () {
        const { name, 
                summary, 
                difficulty, 
                starRating, 
                ratingCount, 
                trailLength, 
                location, 
                imageUrl, 
                conditionDetails, 
                conditionStatus, 
                conditionDate, 
                trailUrl, 
                ascent, 
                elevation,
                latitude,
                longitude } = this.state

            return (
            <div className='trailMainContainer'>
                {/* <TrailImg
                 imageUrl={imageUrl}
                 trailUrl={trailUrl}/>
                <Info 
                 name={name}
                 summary={summary}
                 trailLength={trailLength}
                 location={location}
                 conditionDate={conditionDate}
                 conditionStatus={conditionStatus}
                 conditionDetails={conditionDetails}
                 ascent={ascent}
                 elevation={elevation}/> */}
                <Difficulty
                 difficulty={difficulty}/> 
                {/* <StarRating
                 starRating={starRating}
                 ratingCount={ratingCount}/> */}
                <FocusMap
                 longitude={longitude}
                 latitude={latitude}/>
            </div>
        )
    }
}

export default TrailMain