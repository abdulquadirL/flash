import { Container, Flex, Box, VStack, Image } from "@chakra-ui/react"
import AuthForm from "../components/AuthForm/AuthForm"

const AuthPage = () => {
  return (
    <Flex minHeight={'100vh'} justifyContent={'center'} alignItems={'center'} p={4}>
        <Container maxW={"container.md"} padding={0}>
            <Flex gap={10} justifyContent={"center"} alignItems={"center"}>
                <Box display ={{base:'none', md: "block"}}>
                    <Image src="auth.png" h={650}></Image>
                </Box>
                <VStack spacing={4} align={"stretch"}>
                    <AuthForm/>
                    <Box textAlign={"center"}>Get the App</Box>
                    <Flex gap={5} justifyContent={"center"}>
                        <Image src="/playstore.png" h={"10"} alt="playstore logo"></Image>
                        <Image src="/microsoft.png" h={"10"} alt="microsoft logo"></Image>
                    </Flex>
                </VStack>
            </Flex>
            
        </Container>
    </Flex>
  )
}

export default AuthPage