import Contacthero from '@/components/Frontend/contact/hero'
import React, { ReactNode } from 'react'
import Contacts from '@/components/Frontend/contact/contacts'
import Message from '@/components/Frontend/contact/message'

export default function layout({children}:{children:ReactNode}) {
    return (
    <div>
        <Contacthero/>
        <Message/>
        <Contacts/>
        {children}
    </div>
    )
}