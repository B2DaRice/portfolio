import React, { useRef } from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

export type RouteLinkType = {
  title: string;
  to: string;
  component: React.FC;
}

type RouteLinksProps = {
  links: { [cardKey: string]: RouteLinkType };
  onRouteClick: (cardKey: string) => void;
}

export const RouteLinks = ({ links, onRouteClick }: RouteLinksProps) => {

  return (
    <Box
      className='flexRow'
      sx={{
        width: '100%',
        justifyContent: 'center',
        gap: 10,
        fontFamily: 'Athena',
        backgroundColor: 'black',
        boxShadow: '0 0 80px 70px black',
        zIndex: 10,
      }}
    >
      {
        Object.keys(links).map((cardKey, index) => (
          <Box 
            key={`main-link-${index}`}
            sx={{
              cursor: 'pointer',
              textShadow: '0 0 30px #E900FF',
              color: 'white',
              fontSize: '2rem',
              '&:hover': {
                fontWeight: 'bold',
                textShadow: '0 0 10px #E900FF'
              }
            }}
            onClick={() => {onRouteClick(cardKey)} }
          >
            {/* <Link 
              to={links[cardKey].to}
              style={{ 
                textDecoration: 'none',
                color: 'white',
                fontSize: '2rem'
              }}
            > */}
              { links[cardKey].title }
            {/* </Link> */}
          </Box>
        ))
      }
    </Box>
  )
}