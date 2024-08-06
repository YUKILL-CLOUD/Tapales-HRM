import Cta from '@/components/Frontend/cta'
import Faqs from '@/components/Frontend/faqs'

import HeroSection from '@/components/Frontend/hero'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
    return (
        <div>
            <HeroSection/>
            <Cta/>
            <Faqs/>
            {children}
        </div>  
    )
}
