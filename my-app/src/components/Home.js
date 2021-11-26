


import React from 'react'
import { Button, ButtonGroup , IconButton } from "@chakra-ui/react"
import {AddIcon} from  '@chakra-ui/icons'
import { Box } from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
export default function Home () {
    return (
        <div>
       
            
            
            <Flex bg="tomato" w="100%" p={4} color="white" justify="space-between" align="center">
                <Text fontSize="30px">Team Reporter</Text>
                <Button colorScheme="blue">logout</Button>
                </Flex>
                
            <IconButton aria-label="Search database" icon={<AddIcon />} colorScheme="blue" />
        </div>
    )
}
