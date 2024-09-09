import { notFound } from 'next/navigation'

export default function Blog({ searchParams }) {
  if (searchParams.error === 'true') {
    throw new Error('This is an error')
  }

  if (searchParams.test === 'true') {
    notFound()
  }
  console.log(searchParams)
  return <div>Blog Page</div>
}
