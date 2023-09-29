import { Box, Typography } from '@mui/material'

const componentStyle = () => {

  return ({
    dividerContainer: {
      width: '100%',
      overflow: 'hidden',
      padding: '60px 0 50px 0'
    },
    container: {
      width: '100%',
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 5,
      perspective: '0',
      paddingBottom: '20px',
    },
    middleBox: {
      height: '50px',
      width: '120%',
      backgroundColor: 'black',
      justifyContent: 'end',
      alignItems: 'center',
      // boxShadow: '0 0 20px 20px black',

      '& p': {
        fontFamily: 'Athena', 
        fontSize: '2.5em', 
        color: 'white',
        textShadow: '0px 0px 10px #2200FF',
        opacity: 1,
        fontWeight: 'bold',
        fontStyle: 'italic',
        // animation: 'flickerName 9s linear reverse infinite',
        // fontStretch: 'condensed',
      },
    },
  })
}

type lineProps = {
  size: number;
  radius: number;
  color: string;
  rotate?: number;
  translate: number;
  opacity: number;
  flicker?: number;
}

const lineStyles = ({
  color = '',
  reverse = false,
  flicker = 0,
  ...numProps
}) => {
  let nums = { ...numProps }
  if (reverse) {
    Object.keys(numProps).forEach( key => nums[key] = numProps[key] * -1 )
  }  

  const flickerStyle = flicker ? { animation: `flickerName ${flicker}s linear reverse infinite` } : {}

  const {
    size, 
    radius, 
    rotate, 
    translate, 
    opacity,
  } = nums

  return {
    width: '120%',
    zIndex: color === 'white' ? 6 : 7,
    opacity,

    "& .MuiBox-root": {
      ...flickerStyle,
      width: '100%',
      backgroundColor: color,
      boxShadow: `0 0 ${size}px ${radius}px ${color}`,
      transform: `rotate(${rotate}deg) translateY(${translate}px)`,
    }
  }
}

export const HomeDivider = ({ title }: { title: string }) => {
  const styles = componentStyle()
  const lineConfig: { [key: string]: lineProps } = {
    outter: {
      size: 10,
      radius: 2,
      color: '#E900FF',
      translate: -21,
      opacity: .60
    },
    middle: {
      size: 30,
      radius: 5,
      color: 'white',
      translate: -15,
      opacity: 0.60
    },
    inner: {
      size: 20,
      radius: 3,
      color: '#E900FF',
      translate: -10,
      opacity: 0.5
    }
  }

  return (
    <Box className='flexCol' sx={styles.dividerContainer}>
      <Box className='flexCol' sx={styles.container}>
        <Box sx={lineStyles({ ...lineConfig.outter, rotate: -.1, flicker: 10 })} >
          <Box sx={{ height: '2px' }} />
        </Box>
        <Box sx={lineStyles({ ...lineConfig.middle, rotate: 0 })} >
          <Box sx={{ height: '1px' }} />
        </Box>
        <Box sx={lineStyles({ ...lineConfig.inner, rotate: -0.2 })} >
          <Box sx={{ height: '0.5px' }} />
        </Box>

        <Box className='flexRow' sx={styles.middleBox}>
          <Box sx={{ padding: '0 300px 18px 0' }}>
            <Typography>{ title }</Typography>
          </Box>
        </Box>

        <Box sx={lineStyles({ ...lineConfig.inner, rotate: 0.3, translate: 0 })} >
          <Box sx={{ height: '1.5px' }} />
        </Box>
        <Box sx={lineStyles({ ...lineConfig.middle, rotate: -0.1, translate: 5, flicker: 12 })} >
          <Box sx={{ height: '0.5px' }} />
        </Box>
        <Box sx={lineStyles({ ...lineConfig.outter, rotate: 0.1, translate: 9 })} >
          <Box sx={{ height: '0.5px' }} />
        </Box>
      </Box>
    </Box>
  )
}