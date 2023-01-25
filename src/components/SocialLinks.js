import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { HStack, Box } from "@chakra-ui/react";
import {
    faTwitter,
    faLinkedin,
    faInstagram,
    faYoutube,
    faTiktok,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

const socials = [
    {
      icon: faTwitter,
      url: "https://twitter.com/seanmilfort",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/seanmilfort/",
    },
    {
      icon: faYoutube,
      url: "https://www.youtube.com/@seanmilfort",
    },
    {
      icon: faTiktok,
      url: "https://www.tiktok.com/@seanmilfort",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/seanmilfort",
    },
    {
        icon: faGithub,
        url: "https://github.com/seanmilfort",
      },
    {
        icon: faEnvelope,
        url: "mailto: seanmilfort@me.com",
      }
  ];


const SocialLinks = () => {
    return (<Box marginTop="2em" >
        <HStack spacing={4} style={{justifyContent: "center", alignItems: "center"}}>
            {socials.map(socialMediaLinks => {
                return <Box key={socialMediaLinks.url}><a href={socialMediaLinks.url}><FontAwesomeIcon icon={socialMediaLinks.icon} size="2x" /></a></Box>
            })}
        </HStack>
    </Box>)
}

export default SocialLinks;