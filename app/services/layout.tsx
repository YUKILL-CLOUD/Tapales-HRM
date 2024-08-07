
import Features from '@/components/Frontend/Services/feature'
import HeroSection from '@/components/Frontend/Services/hero'
import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
    return (
    <div>{children}
        <HeroSection/>
        <Features/>
    </div>
    )
}
