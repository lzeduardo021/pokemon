import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Todos from './Todos'

function App() {
  
  return (
   <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/todos' element={<Todos />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
