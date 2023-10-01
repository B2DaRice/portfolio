import React, { useState, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { NameLights } from '../components/NameLights'
import { RouteLinks, RouteLinkType } from '../components/RouteLinks'
import { 
  HomeCardDeveloper, 
  HomeCardMusician,
  HomeCardArtist,
  HomeCardFather,
  HomeCardAbout,
  HomeCardContact
} from './HomeCards'
import { NeonLightLine } from '../components/NeonLightLine'

const links: { [cardKey: string]: RouteLinkType } = {
  devCard: { 
    title: 'Developer', 
    to: '/developer', 
    component: HomeCardDeveloper 
  },
  musicCard: { 
    title: 'Musician', 
    to: '/musician', 
    component: HomeCardMusician 
  },
  artCard: { 
    title: 'Artist', 
    to: '/artist', 
    component: HomeCardArtist 
  },
  dadCard: { 
    title: 'Father', 
    to: '/father', 
    component: HomeCardFather
  },
  aboutCard: { 
    title: 'About', 
    to: '/about', 
    component: HomeCardAbout 
  },
  // contactCard: { 
  //   title: 'Contact', 
  //   to: '/contact', 
  //   component: HomeCardContact 
  // }
}

type SocialLinkType = {
  title: string;
  src: string;
  href: string;
}

const socialLinksConfig: SocialLinkType[] = [
  {
    title: 'LinkedIn',
    src: '/assets/images/logos/social/linkedin.svg',
    href: 'https://www.linkedin.com/in/brice-garlick-b9016628/'
  },
  {
    title: 'GitHub',
    src: '/assets/images/logos/social/github.svg',
    href: 'https://github.com/B2DaRice'
  },
  {
    title: 'Instagram',
    src: '/assets/images/logos/social/instagram.svg',
    href: 'https://www.instagram.com/ajo.grande/'
  },
  {
    title: 'TikTok',
    src: '/assets/images/logos/social/tiktok.png',
    href: 'https://www.tiktok.com/@sax_hair'
  },
  {
    title: 'Facebook',
    src: '/assets/images/logos/social/facebook.svg',
    href: 'https://www.facebook.com/bwgarlick/'
  },
  {
    title: 'DeviantArt',
    src: '/assets/images/logos/social/deviantart.svg',
    href: 'https://www.deviantart.com/b2darice/gallery'
  },
]

export const Home = () => {
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
      width='100vw'
      sx={{
        alignItems: 'start',
        width: '100%',
        lineHeight: 1,
      }}
    >
      <Box
        component='img'
        src='/assets/images/under_construction.png'
        sx={{
          zIndex: 100,
          position: 'fixed',
          top: -110,
          left: -100,
          transform: 'rotate(-40deg)',
          transition: 'top 0.5s ease-in-out',
        }}
      />
      <Box className='flexRow' sx={{
        height: 'calc(100vh - 60px)',
        width: '100%',
        padding: '100px 0 0 150px',
        zIndex: 5,
        justifyContent: 'space-between',
      }}>
        <NameLights />

        <Box className='flexCol' sx={{
          width: '6em',
          height: '100%',
          padding: '100px 20px 0 0',
          gap: '10px',
        }}>
          {
            socialLinksConfig.map(({ title, src, href }) => (
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
        links={links} 
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
          links[selectedCard].component({})
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
