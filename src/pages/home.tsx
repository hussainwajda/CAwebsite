import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/about'
import ServicesCarousel from '@/components/home/services'

function home() {
  return (
    <>
        <HeroSection />
        <AboutSection />
        <ServicesCarousel />
    </>
  )
}

export default home