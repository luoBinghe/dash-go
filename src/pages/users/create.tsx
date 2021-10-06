import { Flex, Box, Divider, Heading, VStack, SimpleGrid, HStack, Button} from '@chakra-ui/react'
import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'
import InputForm from '../../components/Form/Input'

export default function CreateUser(){
  return(
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p={["6","8"]}>
            <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

            <Divider my="6" borderColor="gray.700" />

            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                <InputForm name="name" label="Nome completo" />
                <InputForm name="email" label="E-mail" type="email" />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                <InputForm name="password" type="password" label="Senha" />
                <InputForm name="password_confirmation" label="password" type="Confirmação da senha" />
              </SimpleGrid>
            </VStack>
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Button colorScheme="whiteAlpha">
                  Cancelar
                </Button>
                <Button colorScheme="pink">
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Box>
      </Flex>
    </Box>
  )
}