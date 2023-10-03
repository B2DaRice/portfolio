import { Box, Typography } from '@mui/material'
import { useScreenSize } from '../../hooks/helpers'

export const NameLightsMobile = () => {
  const textStyle = {
    fontFamily: 'Lightman',
    color: '#ffffff',
    textShadow: '0 0 40px #E900FF',
    opacity: 1,
    animation: 'flickerName 10s linear reverse infinite',
    blur: 3,
    fontStretch: 'condensed',
  }

  return (
    <Box className='flexCol' sx={{
      alignItems: 'end',
      width: '100%',
      padding: '70px 30px 0 0 '
    }}>
      
      <span style={{ 
        ...textStyle,
        fontSize: '5em',
        zIndex: 4,
        // position: 'sticky',
        // top: 60,
      }}>
        Brice
      </span>

      <span style={{ 
        ...textStyle, 
        fontSize: '4em',
        zIndex: 6,
        // position: 'sticky',
        // top: 250,
        // alignItems: 'start'
      }}>
        Garlick
      </span>

      <Box className='flexCol' sx={{
        width: '100%',
        alignItems: 'end',
        padding: '50px 20px 0 0',
        gap: '10px',
        textShadow: '0 0 10px #E900FF',
        animation: 'flickerName 12s linear reverse infinite',
      }}>
        {'Critical Thinking, Creativity, Passion, Dad Jokes'.split(', ').map((word, i) => (
          <Typography key={i} align='right' sx={{
            fontFamily: 'LasEnter',
            fontSize: '30px',
            zIndex: 6,
            lineHeight: 1,
            width: '100%',
            transform: 'rotate(-5deg)',
          }}>
            {word}
          </Typography>
        ))}
      </Box>
      

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