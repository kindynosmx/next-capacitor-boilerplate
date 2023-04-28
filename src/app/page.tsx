'use client'

import { Center, Heading, Text, VStack } from '@chakra-ui/layout'

export default function Home() {
  return (
    <Center height="calc(100vh)" width="calc(100vw)">
      <VStack>
        <Heading>Hello World!</Heading>
        <Text>Welcome to the boilerplate</Text>
      </VStack>
    </Center>
  )
}
