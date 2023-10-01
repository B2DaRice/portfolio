import React, { useState, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { NameLightsLaptop } from '../../components/NameLights/NameLightsLaptop'
import { pageLinkConfigs, socialLinkConfigs, SocialLinkType } from './configs'
import { RouteLinks, RouteLinkType } from '../../components/RouteLinks'
import { NeonLightLine } from '../../components/NeonLightLine'

// const links: { [cardKey: string]: RouteLinkType } = {
//   devCard: { 
//     title: 'Developer', 
//     to: '/developer', 
//     component: HomeCardDeveloper 
//   },
//   musicCard: { 
//     title: 'Musician', 
//     to: '/musician', 
//     component: HomeCardMusician 
//   },
//   artCard: { 
//     title: 'Artist', 
//     to: '/artist', 
//     component: HomeCardArtist 
//   },
//   dadCard: { 
//     title: 'Father', 
//     to: '/father', 
//     component: HomeCardFather
//   },
//   aboutCard: { 
//     title: 'About', 
//     to: '/about', 
//     component: HomeCardAbout 
//   },
//   // contactCard: { 
//   //   title: 'Contact', 
//   //   to: '/contact', 
//   //   component: HomeCardContact 
//   // }
// }

// type SocialLinkType = {
//   title: string;
//   src: string;
//   href: string;
// }

// const socialLinksConfig: SocialLinkType[] = [
//   {
//     title: 'LinkedIn',
//     src: '/assets/images/logos/social/linkedin.svg',
//     href: 'https://www.linkedin.com/in/brice-garlick-b9016628/'
//   },
//   {
//     title: 'GitHub',
//     src: '/assets/images/logos/social/github.svg',
//     href: 'https://github.com/B2DaRice'
//   },
//   {
//     title: 'Instagram',
//     src: '/assets/images/logos/social/instagram.svg',
//     href: 'https://www.instagram.com/ajo.grande/'
//   },
//   {
//     title: 'TikTok',
//     src: '/assets/images/logos/social/tiktok.png',
//     href: 'https://www.tiktok.com/@sax_hair'
//   },
//   {
//     title: 'Facebook',
//     src: '/assets/images/logos/social/facebook.svg',
//     href: 'https://www.facebook.com/bwgarlick/'
//   },
//   {
//     title: 'DeviantArt',
//     src: '/assets/images/logos/social/deviantart.svg',
//     href: 'https://www.deviantart.com/b2darice/gallery'
//   },
// ]

export const HomeLaptop = () => {
  const [selectedCard, setSelectedCard] = useState('devCard')
  const menuRef = useRef<HTMLElement>()

  const onRouteClick = (cardKey: string) => {
    setSelectedCard(cardKey);

    if (menuRef.current) {
      const menuBounds = menuRef.current.getBoundingClientRect()

      if (menuBounds.top > 13) {
        menuRef.current.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        })
      }
    }
    
  }

  return (
    <Box
      className='flexCol'
      sx={{
        alignItems: 'start',
        width: '100%',
        lineHeight: 1,
      }}
    >

      <Box className='flexRow' sx={{
        height: 'calc(100vh - 60px)',
        width: '100%',
        padding: '100px 0 0 150px',
        zIndex: 5,
        justifyContent: 'space-between',
      }}>
        <NameLightsLaptop />

        <Box className='flexCol' sx={{
          width: '6em',
          height: '100%',
          padding: '100px 20px 0 0',
          gap: '10px',
        }}>
          {
            socialLinkConfigs.map(({ title, src, href }) => (
              <a 
                href={href}
                target="_blank" 
                rel="noreferrer"
                key={title.toLowerCase()}
              >
                <Box
                  component={'img'}
                  src={src}
                  alt={title}
                  sx={{
                    width: '80%',

                    '&:hover': {
                      width: '100%',
                      transition: 'width 0.2s ease-in-out'
                    }
                  }}
                />
              </a>
            ))
          }
        </Box>
      </Box>


      <RouteLinks 
        links={pageLinkConfigs} 
        onRouteClick={onRouteClick}
        activeRoute={selectedCard}
        menuRef={menuRef}
      />

      

      <Box
        width='100%' 
        sx={{
          zIndex: 9,
          marginTop: '0px',
          height: 'calc(100vh - 31px)',
        }}
      >
        { selectedCard && 
          pageLinkConfigs[selectedCard].component({})
        }
      </Box>
      
      <Box className='flexRow' sx={{
        backgroundColor: 'black',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Box sx={{
          fontSize: '.65em',
          padding: '10px 0'
        }}>
          -- copyright 2023 by Brice Garlick --
        </Box>

      </Box>
    </Box>
  )
}
