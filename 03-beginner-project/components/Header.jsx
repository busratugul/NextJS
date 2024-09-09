'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="flex justify-between items-center bg-amber-100 p-5 text-red-600 font-bold cursor-pointer">
      <div className="text-2xl">Logo</div>
      <div className="flex items-center gap-x-10">
        <Link href={'/'} className={`${pathname === '/' ? "underline" : ''}`}>
          Home
        </Link>
        <Link
          href={'/blog'}
          className={`${pathname === '/blog' ? "underline" : ''}`}
        >
          Blog
        </Link>
        <Link
          href={'/contact'}
          className={`${pathname === '/contact' ? "underline" : ''}`}
        >
          Contact
        </Link>
        <Link
          href={'about'}
          className={`${pathname === '/about' ? "underline" : ''}`}
        >
          About
        </Link>

        <button
          type="button"
          className="rounded bg-gray-300 p-2 hover:shadow duration-200"
          onClick={() => router.push('/auth/login')}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Header
