import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HStack, Box } from "@chakra-ui/react";
import {
    faXTwitter,
    faInstagram,
    faYoutube,
    faTiktok,
    faFacebook,
    faThreads
  } from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faYoutube,
    url: "https://www.youtube.com/@omgitzseanzie",
  },
    {
      icon: faXTwitter,
      url: "https://twitter.com/omgitzseanzie",
    },
    {
      icon: faThreads,
      url: "https://threads.net/@omgitzseanzie",
    },
    {
      icon: faFacebook,
      url: "https://facebook.com/omgitzseanzie",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/omgitzseanzie/",
    },
    {
      icon: faTiktok,
      url: "https://www.tiktok.com/@omgitzseanzie",
    }
  ];


const SocialLinks = () => {
    return (<Box marginTop="2em" >
        <HStack spacing={4} style={{justifyContent: "center", alignItems: "center"}}>
            {socials.map(socialMediaLinks => {
                return <Box key={socialMediaLinks.url}><a rel="me noopener" href={socialMediaLinks.url}><FontAwesomeIcon icon={socialMediaLinks.icon} size="2x" /></a></Box>
            })}
        </HStack>
    </Box>)
}

export default SocialLinks;