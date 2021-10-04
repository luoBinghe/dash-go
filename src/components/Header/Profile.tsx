import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile(){
    return(
      <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Isabela Guayanaz</Text>
          <Text color="gray.300" fontSize="small">isabelaguayanaz@gmail.com</Text>
        </Box>

        <Avatar size="md" name="Isabela Guayanaz" />
      </Flex>
    )
  }