import React from 'react'
import Image from 'next/image'

const Blog = () => {
  return (
    <div>
      <h1 className="text-4xl text-blue-600 m-3">BLOG</h1>
      <Image
        alt="blog fotoğrafı"
        src="/slider/1.jpg"
        width={300}
        height={150}
        className="rounded"
      ></Image>
    </div>
  )
}

export default Blog
