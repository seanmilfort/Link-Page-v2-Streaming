import React from "react";
import { VStack, Box, Button } from "@chakra-ui/react";

const socials = [
    {
      text: "Watch Me Live on YouTube!",
      url: "https://www.youtube.com/@OMGitzSEANZIE/live/",
    },
    {
        text: "Coming Soon to Kick!",
        url: "https://kick.com/omgitzseanzie",
      }
  ];


const SocialButtons = () => {
    return (<Box marginTop="2em" >
        <VStack spacing={4}>
            {socials.map(socialMediaLinks => {
                return <Box key={socialMediaLinks.url}><a href={socialMediaLinks.url}><Button style={{color: "#FBFFFE", backgroundColor: "#96031A", width: "400px"}}>{socialMediaLinks.text}</Button></a></Box>
            })}
        </VStack>
    </Box>)
}

export default SocialButtons;