import React, { useState, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { NameLightsMobile } from '../../components/NameLights/NameLightsMobile'
import { pageLinkConfigs, socialLinkConfigs, SocialLinkType } from './configs'
import { RouteLinks, RouteLinkType } from '../../components/RouteLinks'
import { NeonLightLine } from '../../components/NeonLightLine'
import { RepoButton } from '../../components/RepoButton'

export const HomeMobile = () => {

  return (
    <Box
      className='flexCol'
      sx={{
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        lineHeight: 1,
        justifyContent: 'space-between',
        overflowY: 'hidden',
        scrollY: 'none'
      }}
    >
      <Box sx={{
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        overflowY: 'hidden',
        scrollY: 'none',
      }}>
        <Box
          component='img'
          src='/assets/images/walking_away.png'
          sx={{ 
            height: '115vh',
            position: 'absolute',
            left: '-140px',
            bottom: '-150px',
            zIndex: 5,
            pointerEvents: 'none'
          }}
        />
      </Box>

      <Box sx={{
        zIndex: 100,
        position: 'absolute',
        top: '20px',
        right: '20px',
      }}>
        <RepoButton />
      </Box>

      <NameLightsMobile />

      <Box className='flexRow' sx={{
        width: '100%',
        justifyContent: 'center',
      }}>
        <Box className='flexCol' sx={{
          width: '65%',
          padding: '30px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '-15px 10px 7px 3px rgb(0 0 0 / 0.6)',
          transform: 'rotate(-4deg)',
          zIndex: 7
        }}>
          <Typography sx={{
            fontFamily: 'NoName',
            color: 'red',
            fontSize: '1.25em',
            fontWeight: 'boldest'
          }}>
            Not quite ready for phones yet 🤷
          </Typography>
        </Box>
      </Box>

      <Box className='flexRow' sx={{
        width: '100%',
        height: '80px',
        paddingBottom: '30px',
        gap: '10px',
        justifyContent: 'center',
        zIndex: 7
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
                  height: '100%',
                }}
              />
            </a>
          ))
        }
      </Box>
    </Box>
  )
}
