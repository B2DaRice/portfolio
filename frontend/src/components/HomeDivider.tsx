import { Box, Typography } from '@mui/material'

const componentStyle = () => {
  const line = {
    width: '105%',
    animation: 'flickerName 11s linear reverse infinite',
    zIndex: 6,
  }

  return ({
    container: {
      width: '100%',
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      transform: 'rotate(-2deg)',
      zIndex: 5,
      scrollX: 'hidden',
      perspective: '0',
      paddingBottom: '100px',

      // '& div': {
      //   position: 'absolute'
      // }
    },
    whiteLine: {
      ...line,
      backgroundColor: 'white',
      boxShadow: '0 0 10px 2px white',
      opacity: '0.25'
    },
    purpleLine: {
      ...line,
      backgroundColor: '#E900FF',
      boxShadow: '0 0 14px 4px #E900FF',
      opacity: '0.5'
    },
    middleBox: {
      height: '100px',
      width: '120%',
      // top: `${skewInPixels}px`,
      backgroundColor: 'black',
      justifyContent: 'end',
      alignItems: 'center',
      scrollX: 'none',
      boxShadow: '0 0 20px 20px black',

      '& p': {
        paddingTop: '25px',
        fontFamily: 'Lightman', 
        fontSize: '3em', 
        color: '#ffffff',
        textShadow: '5px 5px 25px #E900FF',
        opacity: 1,
        animation: 'flickerName 9s linear reverse infinite',
        fontStretch: 'condensed',
        transform: 'rotate(2deg)',
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
}

const lineStyles = ({
  color = '',
  reverse = false,
  ...numProps
}) => {
  let nums = { ...numProps }
  if (reverse) {
    Object.keys(numProps).forEach( key => nums[key] = numProps[key] * -1 )
  }  

  const {
    size, 
    radius, 
    rotate, 
    translate, 
    opacity,
  } = nums
  return {
    width: '105%',
    animation: 'flickerName 10s linear reverse infinite',
    zIndex: 6,
    backgroundColor: color,
    boxShadow: `0 0 ${size}px ${radius}px ${color}`,
    transform: `rotate(${rotate}deg) translateY(${translate}px)`,
    opacity,
  }
}

export const HomeDivider = ({ title }: { title: string }) => {
  const styles = componentStyle()
  const lineConfig: { [key: string]: lineProps } = {
    outter: {
      size: 30,
      radius: 8,
      color: '#E900FF',
      translate: -42,
      opacity: 0.25
    },
    middle: {
      size: 15,
      radius: 4,
      color: 'white',
      translate: -23,
      opacity: 0.05
    },
    inner: {
      size: 25,
      radius: 6,
      color: '#E900FF',
      translate: 0,
      opacity: 0.25
    }
  }

  return (
    // <Box sx={container}>

    
    <Box className='flexCol' sx={styles.container}>
      
      <Box sx={{
        ...lineStyles({ ...lineConfig.outter, rotate: 2 }),
        height: '0.5px'
      }} />
      <Box sx={{
        ...lineStyles({ ...lineConfig.middle, rotate: 1.5 }),
        height: '1px'
      }} />
      <Box sx={{
        ...lineStyles({ ...lineConfig.inner, rotate: 0.5 }),
        height: '3px',
      }} />
      {/* <Box sx={topTriangle} /> */}

      <Box className='flexRow' sx={styles.middleBox}>
        <Box sx={{ paddingRight: '350px' }}>
          <Typography>{ title }</Typography>
        </Box>
      </Box>

      <Box sx={{
        ...lineStyles({ ...lineConfig.inner, rotate: 1.5, translate: -5 }),
        height: '2px'
      }} />

      {/* <Box sx={{
        ...lineStyles(16, 3, '#E900FF', 0.8, 10, 0.25),
        height: '0.5px'
      }} /> */}

      <Box sx={{
        ...lineStyles({ ...lineConfig.middle, rotate: 0.5, translate: 16 }),
        height: '1px'
      }} />

      <Box sx={{
        ...lineStyles({ ...lineConfig.outter, rotate: 1.2, translate: 35 }),
        height: '0.5px'
      }} />

      {/* <Box sx={bottomTriangle} /> */}
    </Box>
    // </Box>
  )
}