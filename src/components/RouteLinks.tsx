import React from 'react'
import { Box } from '@mui/material'
import { NeonLightLine } from './NeonLightLine'

const componentStyle = () => ({
  dividerContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    padding: '20px 0',
    blur: '3px',
    backgroundColor: 'black',
    boxShadow: '0 0 20px 30px black',
    zIndex: 100
  },
  middleBox: {
    width: '100%',
    padding: '0 150px',
    justifyContent: 'space-around',
    gap: 10,
    fontFamily: 'NeonGlow',
    filter: 'blur(.5px)',
  },
})


export type RouteLinkType = {
  title: string;
  to: string;
  component: React.FC;
}

type RouteLinksProps = {
  links: { [cardKey: string]: RouteLinkType };
  activeRoute: string;
  menuRef: React.MutableRefObject<HTMLElement | undefined>;
  onRouteClick: (cardKey: string) => void;
}

export const RouteLinks = ({ links, activeRoute, menuRef, onRouteClick }: RouteLinksProps) => {
  const styles = componentStyle()

  const linkStyle = (isActive: boolean) => ({
    cursor: 'pointer',
    textShadow: `0 0 ${isActive ? 20 : 0}px #F8ADFF`,
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'white' : '#a2a2a2',
    fontSize: '1.7rem',
    animation: isActive ? 'flickerName 15s linear reverse infinite' : '',

    '&:hover': {
      fontWeight: 'bold',
      color: 'white',
      textShadow: `0 0 ${isActive ? 20 : 10}px #F8ADFF`,
    }
  })

  return (
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

      <Box className='flexCol' sx={styles.dividerContainer}>
          <Box className='flexRow' sx={styles.middleBox}>
            {
              Object.keys(links).map((cardKey, index) => (
                <Box 
                  key={`main-link-${index}`}
                  sx={linkStyle(cardKey === activeRoute)}
                  onClick={() => {onRouteClick(cardKey)} }
                >
                  { links[cardKey].title }
                </Box>
              ))
            }
          </Box>
      </Box>
      <NeonLightLine lineOptions={{ rotate: -0.3 }} lineType='lightPurple' height={'1.5px'} />
      <NeonLightLine lineOptions={{ rotate: -0.1, translate: 5, flicker: 12 }} lineType='white' height={'0.5px'} />
      <NeonLightLine lineOptions={{ rotate: 0.2, translate: 15 }} lineType='white' height={'1px'} />
      <NeonLightLine lineOptions={{ rotate: 0, translate: 9 }} lineType='purple' height={'0.5px'} />
    </Box>
  )
}