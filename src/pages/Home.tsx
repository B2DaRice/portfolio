import React, { useState, useRef } from 'react'
import { Box } from '@mui/material'
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
      <Box className='flexRow' sx={{
        height: 'calc(100vh - 60px)',
        width: '100%',
        padding: '100px 0 0 150px',
        zIndex: 5
      }}>
        <NameLights />
      </Box>

      
      

      <Box 
        width='100%'
        // height='300px'
        id="routeMenu"
        sx={{ 
          position: 'sticky', 
          top: '-10px',
          zIndex: 10
        }}
        ref={menuRef}
      >
        <NeonLightLine lineOptions={{ rotate: -0.1, flicker: 10, translate: -21 }} lineType='purple' height={'2px'} />
        <NeonLightLine lineOptions={{ rotate: 0.1, translate: -15 }} lineType='white' height={'1px'} />
        <NeonLightLine lineOptions={{ rotate: -0.2, translate: -10 }} lineType='lightPurple' height={'0.5px'} />

        <RouteLinks 
          links={links} 
          onRouteClick={onRouteClick}
          activeRoute={selectedCard}
        />

        <NeonLightLine lineOptions={{ rotate: -0.3 }} lineType='lightPurple' height={'1.5px'} />
        <NeonLightLine lineOptions={{ rotate: -0.1, translate: 5, flicker: 12 }} lineType='white' height={'0.5px'} />
        <NeonLightLine lineOptions={{ rotate: 0.2, translate: 15 }} lineType='white' height={'1px'} />
        <NeonLightLine lineOptions={{ rotate: 0, translate: 9 }} lineType='purple' height={'0.5px'} />
      </Box>
      

      <Box
        width='100%' 
        sx={{
          zIndex: 9,
          marginTop: '0px',
          height: 'calc(100vh - 20px)',
        }}
      >
        { selectedCard && 
          links[selectedCard].component({})
        }
      </Box>
      
      
    </Box>
  )
}
