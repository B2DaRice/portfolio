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
      padding: '90px 30px 0 0 '
    }}>
      
      <span style={{ 
        ...textStyle,
        fontSize: '85px',
        zIndex: 4,
      }}>
        Brice
      </span>

      <span style={{ 
        ...textStyle, 
        fontSize: '60px',
        zIndex: 6,
      }}>
        Garlick
      </span>

      <Box className='flexCol' sx={{
        width: '100%',
        alignItems: 'end',
        paddingRight: '20px'
      }}>
        {'Critical Thinking, Creativity, Passion, Dad Jokes'.split(', ').map((word, i) => (
          <Typography key={i} align='right' sx={{
            fontFamily: 'Athena',
            fontSize: '1.25em',
            zIndex: 6,
            lineHeight: 1,
            width: '100%',
          }}>
            {word}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}
