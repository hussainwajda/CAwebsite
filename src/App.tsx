import './App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Layout from './components/layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main routes */}
          <Route index element={<h1>Home</h1>} />
          <Route path="about" element={<h1>About</h1>} />
          {/*<Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} /> */}

          {/* 404 Route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
