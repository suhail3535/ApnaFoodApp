import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';
import "./form.css"
import { ReactNode } from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
// import logoImg from "../assets/l.png"

const Logo = (props) => {
    // return (

    //     // <img className='logo_khan' src={logoImg} alt="" />
    // );
};

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const Foot = () => {
    return (
        <Box
            bg={useColorModeValue('black', 'black')}
            color={useColorModeValue('white', 'white')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Logo color={useColorModeValue('gray.700', 'white')} />
                        </Box>
                        <Text fontSize={'14px'}>
                            Created By Suhail Khan <span style={{ color: "red" }}>❤</span> | © 2024. All Rights Reserved
                        </Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label={'Twitter'} href={''}>
                                <FaTwitter className='icone_class' />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={''}>
                                <FaYoutube className='icone_class' />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={''} >
                                <Link to={"/https://github.com/suhail3535"}><FaGithub className='icone_class' /></Link>
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={''} >
                                <FaInstagram className='icone_class' />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link href={'#'}>About us</Link>
                        <Link href={'#'}>Blog</Link>
                        <Link href={'#'}>Contact us</Link>
                        <Link href={'#'}>Pricing</Link>
                        <Link href={'#'}>Testimonials</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Link href={'#'}>Help Center</Link>
                        <Link href={'#'}>Terms of Service</Link>
                        <Link href={'#'}>Legal</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Satus</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Stay up to date</ListHeader>
                        <Stack direction={'row'}>
                            <Input
                                placeholder={'Your email address'}
                                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                border={"1px solid cyan"}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                }}
                            />
                            <IconButton
                                bg={useColorModeValue('green.400', 'green.800')}
                                color={useColorModeValue('white', 'gray.800')}
                                _hover={{
                                    bg: 'green.600',
                                }}
                                aria-label="Subscribe"
                                icon={<BiMailSend />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
export default Foot
