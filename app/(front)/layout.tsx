import Cta from '@/components/Frontend/cta'
import Faqs from '@/components/Frontend/faqs'
import Footer from '@/components/Frontend/footer'
import HeroSection from '@/components/Frontend/hero'
import Navbar from '@/components/Frontend/navbar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Cta/>
        <Faqs/>
        <Footer/>
        {children}
    </div>
  )
}
