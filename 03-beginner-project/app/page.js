async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function Home() {
  await delay(3000)
  return (
    <>
      <div className="bg-red-400 text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
        necessitatibus! Labore, maxime magni voluptatum error atque excepturi
        inventore laborum laboriosam?
      </div>
    </>
  )
}

export const metadata = {
  title: 'My Page Title',
  description: 'This is the description of my page',
  keywords: 'nextjs, metadata, seo',
  openGraph: {
    title: 'My Open Graph Title',
    description: 'This is the description for social media',
    url: 'https://mywebsite.com',
    images: [
      {
        url: '/image.jpg',
        width: 800,
        height: 600,
        alt: 'My Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site_username',
    title: 'My Twitter Title',
    description: 'This is the description for Twitter',
    image: '/twitter-image.jpg',
  },
};

export default Home
