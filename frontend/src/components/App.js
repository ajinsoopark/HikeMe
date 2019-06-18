import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Home from '../components/Home/home'
import TrailMain from '../components/TrailPage/trailMain'
import NavBar from '../components/navbar'

import '../css/App.css'
class App extends Component {
  render() {
    return (
      <>
      <div className='mainContainer'>
        <Route component={ NavBar }/>
        <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/trail/:id' component={ TrailMain }/>
        </Switch>
      </div>
      </>
    )
  }
}

export default withRouter(App)

// add it in the end :
// <Route component={ NavBar }/>
// <Route path='/trail/:id' component={ TrailMain }/>
