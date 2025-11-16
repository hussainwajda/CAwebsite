// import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/about'
import ServicesCarousel from '@/components/home/services'
import SEO from '@/components/SEO'

function home() {
  return (
    <>
        <SEO 
          title='Chartered Accountant Services | VP Khambe & Associates'
          description='CA Vinay Khambe provides expert Chartered Accountant services in Pune, offering tax audit, internal audit, statutory audit, GST audit, and more. Book your consultation today!'
          keywords='Chartered Accountant Services in Pune, CA near me, Best CA in Pune, VP Khambe & Associates, CA Vinay Khambe'
          canonical='https://cavinaykhambe.in/'
        />
        <HeroSection />
        <AboutSection />
        <ServicesCarousel />
    </>
  )
}

export default home