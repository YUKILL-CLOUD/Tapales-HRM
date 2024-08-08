
import React, { ReactNode } from 'react'
import HeroSection from '@/components/Frontend/contact/hero'
export default function layout({children}:{children:ReactNode}) {
    return (
    <div>{children}
        <HeroSection/>
    </div>
    )
}