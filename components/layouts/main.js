import Head from 'next/head'
//import dynamic from 'next/dynamic'
//import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
//import Footer from '../footer'
//import VoxelDogLoader from '../voxel-dog-loader'

//const LazyVoxelDog = dynamic(() => import ('../voxel-dog'), {
//  ssr: false,
//  loading: () => <VoxelDogLoader />
//})
//    <NavBar path={router.asPath}>
//      <LazyVoxelDog/>
//    <Footer />

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="darccau's blog" />
        <meta name="author" content="darccau" />
        <meta name="author" content="Eduardo Paixão" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@darccau" />
        <meta name="twitter:creator" content="@darccau" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="darccau's blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>darccau's - blog</title>
      </Head>
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main

