import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
        <h2>i am dash layout </h2>
        {children}
    </div>
  )
}
