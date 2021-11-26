import { Box } from '@chakra-ui/layout'
import { FormLabel, FormErrorMessage, Input, Button, Text, Link } from '@chakra-ui/react'


const Signup = () => {
   

    return (
        <Box width="100%" minH="100vh" background="gray.200" d="flex" alignItems="center" justifyContent="center">
            <Box width="30%" shadow="lg" background="white" p={12} rounded={6}>
                <form>

                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input type="email" name="email" placeholder="Enter Email" />
                       
                   <FormLabel htmlFor="userName">Username</FormLabel>
                        <Input type="text" name="username" placeholder="Enter Username" />
                    
                        <FormLabel htmlFor="email">Password</FormLabel>
                        <Input type="password" name="password" placeholder="Enter Password" />
                        
                  
                   
                        <FormLabel htmlFor="repeat_password">Repeat Password</FormLabel>
                        <Input type="password" name="repeat_password" placeholder="Repeat Password"  required />

                       
                  
                    <Button  mt={4} colorScheme="messenger" type="submit" width="100%">Signup</Button>
                    <Text textAlign="center" p="2" sixe="xs">
                    </Text>
                </form>
            </Box>
        </Box >
    )
}

export default Signup;
