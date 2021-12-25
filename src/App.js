import React from 'react'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import "./App.css"
import Tools from './Components/Tools'
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Switch>
        <Route path='/About' component={About} />
        <Route path='/Skills' component={Skills} />
        <Route path='/Tools' component={Tools} />
      </Switch>
      
    </div>
  )
}

export default App
