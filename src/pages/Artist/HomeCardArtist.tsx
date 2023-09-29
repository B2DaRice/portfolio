import { Box, Typography } from '@mui/material'
import { HomeDivider } from '../../components/HomeDivider'

export const HomeCardArtist = () => {
  const gifUrl = 'https://media.giphy.com/media/xT39D7GQo1m3LatZyU/giphy.gif'
  return (
    <Box 
      id='artCard'
      className='flexCol'
      sx={{
        width: '100%',
        height: '100%'
      }}
    >

      <Box 
        className='flexRow'
        sx={{
          padding: 20,
          width: '100%',
          gap: 10,
          justifyContent: 'center',
        }}
      >
        <Typography> I'm an Artist!</Typography>
        <Box
          component='img'
          src={gifUrl}
          height={200}
        />
      </Box>

      
    </Box>
  )
}