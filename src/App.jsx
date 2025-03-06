import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './components/Index'



function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/about"></Route>
          <Route path="/explore-courses"></Route>
          <Route path="/course-details"></Route>
          <Route path="/knowledge-sharing"></Route>
          <Route path="/login"></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
