import React from 'react'
import Image from 'next/image'
import BacktoScholl from '@/public/slider/1.jpg'

const Blog = () => {
  return (
    <div>
      <h1 className="text-4xl text-blue-600 m-3">BLOG</h1>
      <h6>bACK TO School</h6>
      <Image
        alt="blog fotoğrafı"
        src={BacktoScholl}
        width={400}
        height={400}
        className="rounded object-cover"
      ></Image>
    </div>
  )
}

export default Blog
