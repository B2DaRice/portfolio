import { Box, Typography } from '@mui/material'
import { useState } from 'react'


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
      position: 'sticky',
      top: 30
    }}>
      <span style={textStyle}>
        Brice
      </span>

      <span style={textStyle}>
        Garlick
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
