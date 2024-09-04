import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import  { BrowserRouter,Routes,Route } from 'react-router-dom'

import First from './pages/first'
import Form from './components/Form'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<First />} />
      <Route path='/useradd' element={<Form validate="add" />} />
      <Route path='/userupdate/:id' element={<Form validate="update" />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App
