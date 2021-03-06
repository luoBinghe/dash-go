import { Flex, Input, Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import { useState } from 'react'

export function SearchBox(){
  const [search, setSearch] = useState('')

  console.log(search)
  return(
    <Flex
    as="label"
    flex="1"
    py="4"
    px="8"
    ml="6"
    maxWidth="400"
    alignSelf="center"
    color="gray.200"
    position="relative"
    bg="gray.800"
    borderRadius="full"
  >
    <Input 
      color="gray.50"
      variant="unstyled"
      placeholder="Busco na plataforma"
      px="4"
      mr="4"
      __placeholder={{ color: 'gray.400' }}
      value={search}
      onChange={event => setSearch(event.target.value)}
    />
    <Icon as={RiSearchLine} fontSize="20" />
  </Flex>
  )
}