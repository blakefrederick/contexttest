import React from 'react'
import Link from 'next/link'

function SideBar({ pages }) {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <h2 className="p-2">Choose a page</h2>
        <nav>
          <ul>
            {pages?.map((page) => (
              <li key={page}>
                <Link href={page}>{page}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default SideBar
