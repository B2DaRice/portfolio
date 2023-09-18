import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { NameLights } from '../components/NameLights'
import { RouteLinks, RouteLinkType } from '../components/RouteLinks'
import { HomeDivider } from '../components/HomeDivider'
import { HomeCardDeveloper } from './Developer/HomeCardDeveloper'
import { ScrollToHashElement } from '../components/utilities/ScrollToHashElement'

export const Home = () => {
  const links: { [cardKey: string]: RouteLinkType } = {
    devCard: { 
      title: 'Developer', 
      to: '/#devCard', 
      component: HomeCardDeveloper 
    },
    musicCard: { 
      title: 'Musician', 
      to: '/#musicCard', 
      component: () => <Box></Box> 
    },
    artCard: { 
      title: 'Artist', 
      to: '/#artCard', 
      component: () => <Box></Box> 
    },
    dadCard: { 
      title: 'Father', 
      to: '/#dadCard', 
      component: () => <Box></Box> 
    },
    aboutCard: { 
      title: 'About', 
      to: '/#aboutCard', 
      component: () => <Box></Box> 
    },
    contactCard: { 
      title: 'Contact', 
      to: '/#contactCard', 
      component: () => <Box></Box> 
    }
  }
  // const links: RouteLinkType[] = Object.values(linkConfig)
  const [selectedCard, setSelectedCard] = useState('devCard')

  return (
    <Box
      className='flexCol'
      width='100vw'
      sx={{
        alignItems: 'start',
        width: '100%',
        // padding: 10,
        lineHeight: 1,
        // backgroundColor: 'grey'
      }}
    >
      <Box className='flexCol' sx={{
        height: 'calc(100vh - 150px)',
        width: '100%',
        padding: 15,
        justifyContent: 'space-between',
      }}>
        <NameLights />
      </Box>

      <ScrollToHashElement />
      <Box width='100%'>
        <RouteLinks 
          links={links} 
          onRouteClick={(cardKey: string) => {
            setSelectedCard(cardKey)
          }} 
        />
      </Box>
      

      <Box width='100%' sx={{ 
        marginTop: 25,
        height: 'calc(100vh - 200px)',
      }}>
        { selectedCard && 
          links[selectedCard].component({})
        }
      </Box>
      
      
    </Box>
  )
}
