import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col'>
      Hello World
      <Link href="/hakkimizda" className="block text-blue-500">
        Hakkımızda
      </Link>
      <Link href="./docs/post" className="text-pink-500">
        Post 1
      </Link>
      <Link href={{
        pathname:"/features/slug",
        query: {
          name: "Next.js",
          surname: "ff",
        }
      }} 
      className=" text-green-500">
        Features
      </Link>
    </div>
  )
}
