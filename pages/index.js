import Portfolio from '../portfolio'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yash Patel - Full-Stack Developer & Cloud Architect</title>
        <meta name="description" content="Portfolio of Yash Patel - Full-Stack Developer, Cloud Architect, and Sales Leader specializing in MERN Stack, AWS, and team leadership." />
        <meta name="keywords" content="Yash Patel, Full-Stack Developer, Cloud Architect, MERN Stack, AWS, React, Node.js, Next.js, Sales Leader" />
        <meta name="author" content="Yash Patel" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yash Patel - Full-Stack Developer & Cloud Architect" />
        <meta property="og:description" content="Portfolio showcasing expertise in MERN Stack, AWS, and technical leadership." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Yash Patel - Full-Stack Developer & Cloud Architect" />
        <meta property="twitter:description" content="Portfolio showcasing expertise in MERN Stack, AWS, and technical leadership." />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Portfolio />
    </>
  )
}
