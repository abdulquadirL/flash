import { Box, Flex, Link } from "@chakra-ui/react"

const Sidebar = () => {
  return (
    <Box 
    height={"100px"}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.100"}
    py={5}
    position={"sticky"}
    top={0}
    left={0}
    px={{base:2, md:4}}
    >
        <Flex>
            <Link> </Link>
        </Flex>

    </Box>
  )
}

export default Sidebar