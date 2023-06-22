import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './Admin'
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Admin}/>
      </Routes>
    </Router>
  )
}

export default App