import React, { useState, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { NameLightsLaptop } from '../../components/NameLights/NameLightsLaptop'
import { pageLinkConfigs, socialLinkConfigs, SocialLinkType } from './configs'
import { RouteLinks, RouteLinkType } from '../../components/RouteLinks'
import { NeonLightLine } from '../../components/NeonLightLine'
import { RepoButton } from '../../components/RepoButton'


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
      <Box sx={{
        zIndex: 100,
        position: 'absolute',
        top: '20px',
        right: '20px',
      }}>
        <RepoButton />
      </Box>

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
