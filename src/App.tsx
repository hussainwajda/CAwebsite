import './App.css'
import { BrowserRouter, Router, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/layout'
import home from './pages/home'
import ServiceRouter from './pages/services'
import AboutUsPage from './pages/aboutUs'
import NotFound from './pages/404'
import ContactUsPage from './pages/contact'
import BlogPage from './pages/blog'
import { ScrollToTop } from './components/scrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main routes */}
          <Route index Component={home} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="services" element={<ServiceRouter />} />
          <Route path="/services/:serviceName" element={<ServiceRouter />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
