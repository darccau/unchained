import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
    <Layout>
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            >
                Yoo , I&apos;m a pentester based in Brazil!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Eduardo Paixão (darccau)
                    </Heading>
                    <p>( Pentester / CTF player / Software Developer )</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                            src="/images/darccau.jpg"
                            alt="Profile image"
                            borderRadius="full"
                            width="100%"
                            height="100%"
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    I am a penetration tester dedicated to researching, exploring
                    and subvert computer systems. At first I work with
                    computer networks configuring assets and analyzing traffic.
                    But after experiencing the vulnerability exploitation process
                    i changed my area to cybersecurity.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/resume.pdf" scroll={false}>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My resume
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1998</BioYear>
                    Born in Natal, Rio Grande do Norte.
                </BioSection>
                <BioSection>
                    <BioYear>2017</BioYear>
                    Completed computer network technician degree at Universidade Federal
                    do Rio Grande do Norte. And in the same year, i start my bachelor's
                    in information technology on the same instution.
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Started my internship in Network Infrastructure
                </BioSection>
                <BioSection>
                    <BioYear>2020 to present</BioYear>
                    Became a Pentester on STI.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/darccau/unchained" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub />}
                            >
                                @darccau
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="linkedin.com/in/darccau/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoLinkedin />}
                            >
                                in/darccau
                            </Button>
                        </Link>
                    </ListItem>
                </List>

            </Section>
        </Container>
    </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
