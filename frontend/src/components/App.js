import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../components/Home/home'
// import TrailMain from '../components/TrailPage/trailMain'
// import NavBar from '../components/navbar'

class App extends Component {
  render() {
    return (
      <>
      <div className='mainContainer'>
        <Switch>
            <Route exact path='/' component={ Home }/>
        </Switch>
      </div>
      </>
    )
  }
}

export default App

// add it in the end :
// <Route component={ NavBar }/>
// <Route path='/trail/:id' component={ TrailMain }/>
