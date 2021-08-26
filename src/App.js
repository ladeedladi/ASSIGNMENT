import React from 'react'
import './App.css'
import Body from './Components/Body'
import LeftBody from './Components/LeftBody'
import {BrowserRouter as Router} from "react-router-dom"

import NavBar from './Components/NavBar'
import Contact from './Pages/Contact'
import Kanban from './Pages/Kanban'
import Profile from './Components/Profile'

function App() {

  return (
    <>

    <NavBar/>
    <div className="maindiv">
    <LeftBody/>
    <Router>
      <Route path="/" exact>
        <Body/>
    </Route>
      <Route path="/contacts" exact>
        <Contact/>
    </Route>
      <Route path="/kanban" exact>
        <Kanban/>
    </Route>
    <Route path="/profile" exact>
        <Profile/>
    </Route>
    </Router>
    </div>
    
    </>
  )
}

export default App
