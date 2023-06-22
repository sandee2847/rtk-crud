import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './Admin'
import Usersdata from './components/Usersdata'
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Admin}/>
        <Route path="/addData" Component={Usersdata}/>
      </Routes>
    </Router>
  )
}

export default App