import { Box, Typography } from '@mui/material'
import { HomeDivider } from '../../components/HomeDivider'

export const HomeCardMusician = () => {
  const gifUrl = 'https://media.giphy.com/media/ADiD9sXd7sfS0/giphy.gif'
  return (
    <Box 
      id='musicCard'
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
        <Typography> I'm a Musician!</Typography>
        <Box
          component='img'
          src={gifUrl}
          height={200}
        />
      </Box>

      
    </Box>
  )
}