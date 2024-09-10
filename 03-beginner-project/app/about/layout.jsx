import React from 'react'
import Link from 'next/link'

/* typescript kullanırsak
interface layoutProps {
    children: React.ReactNode
} 
    const LayoutAbout = ({children}:layoutProps) => {
*/

const LayoutAbout = ({ children }) => {
  return (
    <div>
      <header>Bizi Tanıyın</header>
      <div className="flex justify-center gap-5 text-red-700 my-3">
        <Link href="/about">Hakkımızda</Link>
        <Link href="/about/mission">Misyon</Link>
        <Link href="/about/vision">Vizyon</Link>
        <Link href="/about/us">Biz</Link>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default LayoutAbout
