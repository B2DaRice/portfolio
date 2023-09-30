import { Box, Typography } from '@mui/material'

export const NameLights = () => {
  const textStyle = {
    fontFamily: 'Lightman', 
    fontSize: '12em', 
    color: '#ffffff',
    textShadow: '0 0 40px #E900FF',
    opacity: 1,
    animation: 'flickerName 10s linear reverse infinite',
    blur: 3,
    fontStretch: 'condensed',
  }

  return (
    <Box className='flexCol' sx={{
      alignItems: 'start',
    }}>
      <Box
        component='img'
        src='/assets/images/walking_away.png'
        sx={{
          position: 'absolute',
          height: '95vh',
          transform: 'scaleX(-1)',
          right: 670,
          zIndex: 5,
          pointerEvents: 'none'
        }}
      />
      
      <span style={{ 
        ...textStyle, 
        zIndex: 4,
        position: 'sticky',
        top: 60
      }}>
        Brice
      </span>

      <span style={{ 
        ...textStyle, 
        zIndex: 6,
        position: 'sticky',
        top: 250,
        alignItems: 'start'
      }}>
        Garlick

        <Typography align='left' sx={{
          fontFamily: 'Athena',
          fontSize: '28px',
          lineHeight: 0.5
        }}>
          Creativity, Passion, Critical Thinking, Dad Jokes
        </Typography>
      </span>

      {/* <Typography sx={{ 
        fontFamily: 'Lightman', 
        fontSize: 48, 
        color: 'white',
        position: 'relative',
        boxShadow: '0 0 10px 10px white'
      }}>
        Brice Garlick
      </Typography> */}
    </Box>
  )
}
