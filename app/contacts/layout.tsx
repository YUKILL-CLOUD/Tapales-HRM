
import React, { ReactNode } from 'react'
import HeroSection from '@/components/Frontend/contact/hero'
import ContactMap from '@/components/Frontend/contact/map'
import ContactNumbers from '@/components/Frontend/contact/contacts'
export default function layout({children}:{children:ReactNode}) {
    return (
    <div>{children}
        <HeroSection/>
        <ContactMap/>
        <ContactNumbers/>
    </div>
    )
}