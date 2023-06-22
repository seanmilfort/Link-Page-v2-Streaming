import { Heading, Text, Avatar, Box, VStack } from "@chakra-ui/react";
import React from "react";
import profilepicture from '../images/omgitzseanzie_profile.JPG'

const Header = () => {
return (
    <Box marginTop="5em" >
        <VStack>
            <Avatar size="2xl" name="OMGitzSEANIZE" src={profilepicture} />
            <Heading size="xl" style={{color: "#96031A"}}>OMGitzSEANZIE</Heading>
            <Text size="md">I play videogames at an average, but fun level.</Text>
        </VStack>
    </Box>
)
}

export default Header;