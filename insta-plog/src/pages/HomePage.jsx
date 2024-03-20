import { Box, Text } from '@chakra-ui/react';

const store = [{name: 'Next'}, {product: 'Nexter'}, {quantity: 5}]

const HomePage = () => {
  
  return (
    <Box>
     <Text>Hello Home</Text>
     <Text> {store.name} </Text>
    </Box>
  )
}

export default HomePage