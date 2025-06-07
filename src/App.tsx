import './App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import layout from './components/layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/layout' Component={layout} />
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
