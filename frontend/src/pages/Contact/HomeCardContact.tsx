import { Box, Typography } from '@mui/material'
import { HomeDivider } from '../../components/HomeDivider'

export const HomeCardContact = () => {
  const gifUrl = 'https://media.giphy.com/media/c2ALUTZJNBkYw/giphy.gif'
  return (
    <Box 
      id='contactCard'
      className='flexCol'
      sx={{
        width: '100%',
        height: '100%'
      }}
    >
      <HomeDivider title='Contact' />

      <Box 
        className='flexRow'
        sx={{
          padding: 20,
          width: '100%',
          gap: 10,
          justifyContent: 'center',
        }}
      >
        <Typography> Contact Me (once I write this page...)</Typography>
        {/* <Box
          component='img'
          src={gifUrl}
          height={200}
        /> */}
      </Box>

      
    </Box>
  )
}