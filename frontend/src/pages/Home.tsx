import React, { useEffect, useState, useRef } from 'react'
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
import { useLocation } from 'react-router-dom'

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
  contactCard: { 
    title: 'Contact', 
    to: '/contact', 
    component: HomeCardContact 
  }
}

export const Home = () => {
  let location = useLocation();
  const [selectedCard, setSelectedCard] = useState('')
  const menuRef = useRef<HTMLElement>()

  const onRouteClick = (cardKey: string) => {
    if (cardKey !== selectedCard) {
      setSelectedCard(cardKey);

      if (menuRef.current) {
        const menuBounds = menuRef.current.getBoundingClientRect()

        if (menuBounds.top > 13) {
          menuRef.current.scrollIntoView({
            behavior: "smooth",
          })
        }
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
      <Box className='flexCol' sx={{
        height: 'calc(100vh - 105px)',
        width: '100%',
        padding: 15,
      }}>
        <NameLights />
      </Box>

      <Box 
        width='100%' 
        id="routeMenu"
        sx={{ position: 'sticky', top: '28px' }}
        ref={menuRef}
      >
        <RouteLinks 
          links={links} 
          onRouteClick={onRouteClick} 
        />
      </Box>
      

      <Box
        width='100%' 
        sx={{ 
          marginTop: '13px',
          height: 'calc(100vh - 100px)',
        }}
      >
        { selectedCard && 
          links[selectedCard].component({})
        }
      </Box>
      
      
    </Box>
  )
}
