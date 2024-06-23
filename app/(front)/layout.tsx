import HeroSection from '@/components/Frontend/hero'
import Navbar from '@/components/Frontend/navbar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        {children}
    </div>
  )
}
