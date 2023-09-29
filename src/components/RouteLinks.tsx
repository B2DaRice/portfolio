import React from 'react'
import { Box } from '@mui/material'
import { NeonLightLine, NeonLineConfig } from './NeonLightLine'

const componentStyle = () => {

  return ({
    dividerContainer: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      padding: '20px 0',
      blur: '3px',
      backgroundColor: 'black',
      boxShadow: '0 0 20px 30px black',
    },
    middleBox: {
      // height: '100%',
      width: '100%',
      // paddingTop: '20px',
      // backgroundColor: 'black',
      // justifyContent: 'end',
      // alignItems: 'center',
      // width: '100%',
      justifyContent: 'center',
      gap: 10,
      fontFamily: 'Lightman',

      // '& p': {
      //   fontFamily: 'Athena', 
      //   fontSize: '2.5em', 
      //   color: 'white',
      //   textShadow: '0px 0px 10px #2200FF',
      //   opacity: 1,
      //   fontWeight: 'bold',
      //   fontStyle: 'italic',
      //   // animation: 'flickerName 9s linear reverse infinite',
      //   // fontStretch: 'condensed',
      // },
    },
  })
}

export type RouteLinkType = {
  title: string;
  to: string;
  component: React.FC;
}

type RouteLinksProps = {
  links: { [cardKey: string]: RouteLinkType };
  activeRoute: string;
  onRouteClick: (cardKey: string) => void;
}

export const RouteLinks = ({ links, activeRoute, onRouteClick }: RouteLinksProps) => {
  const styles = componentStyle()

  const linkStyle = (isActive: boolean) => ({
    cursor: 'pointer',
    textShadow: `0 0 ${isActive ? 5 : 0}px #F8ADFF`,
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'white' : '#a2a2a2',
    fontSize: '1.7rem',
    animation: isActive ? 'flickerName 15s linear reverse infinite' : '',

    '&:hover': {
      fontWeight: 'bold',
      color: '#E900FF',
      textShadow: '0 0 20px white',
    }
  })

  return (
    <Box className='flexCol' sx={styles.dividerContainer}>
        {/* <Box sx={lineStyles({ ...lineConfig.outter, rotate: -.1, flicker: 10 })} >
          <Box sx={{ height: '2px' }} />
        </Box> */}
        {/* <NeonLightLine lineOptions={{ rotate: -0.1, flicker: 10, translate: -21 }} lineType='purple' height={'2px'} />
        <NeonLightLine lineOptions={{ rotate: 0.1, translate: -15 }} lineType='white' height={'1px'} />
        <NeonLightLine lineOptions={{ rotate: -0.2, translate: -10 }} lineType='lightPurple' height={'0.5px'} /> */}
        {/* <Box sx={lineStyles({ ...lineConfig.middle, rotate: 0 })} >
          <Box sx={{ height: '1px' }} />
        </Box>
        <Box sx={lineStyles({ ...lineConfig.inner, rotate: -0.2 })} >
          <Box sx={{ height: '0.5px' }} />
        </Box> */}

        {/* <Box sx={styles.container}> */}
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
        {/* </Box> */}

        {/* <NeonLightLine lineOptions={{ rotate: -0.3 }} lineType='lightPurple' height={'1.5px'} />
        <NeonLightLine lineOptions={{ rotate: -0.1, translate: 5, flicker: 12 }} lineType='white' height={'0.5px'} />
        <NeonLightLine lineOptions={{ rotate: -0.2, translate: 15 }} lineType='white' height={'1px'} />
        <NeonLightLine lineOptions={{ rotate: 0.2, translate: 9 }} lineType='purple' height={'0.5px'} /> */}
        {/* <Box sx={lineStyles({ ...lineConfig.inner, rotate: 0.3, translate: 0 })} >
          <Box sx={{ height: '1.5px' }} />
        </Box>
        <Box sx={lineStyles({ ...lineConfig.middle, rotate: -0.1, translate: 5, flicker: 12 })} >
          <Box sx={{ height: '0.5px' }} />
        </Box>
        <Box sx={lineStyles({ ...lineConfig.outter, rotate: 0.1, translate: 9 })} >
          <Box sx={{ height: '0.5px' }} />
        </Box> */}
    </Box>
  )
}