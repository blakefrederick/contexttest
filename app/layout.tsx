'use client'

import React, { useEffect, useState } from 'react'
import SideBar from '@/components/SideBar'
import '@/styles/globals.css'

type Props = {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  const [pages, setPages] = useState<string[]>([])

  useEffect(() => {
    const fetchPages = async () => {
      const response = await fetch('/api/pages')
      const data = await response.json()
      setPages(data.pages)
    }

    fetchPages()
  }, [])

  return (
    <html>
      <head />
      <body>
        <div className="flex">
          <SideBar pages={pages} />

          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
