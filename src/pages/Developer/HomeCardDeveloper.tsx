import { Box, Typography } from '@mui/material'
import { HomeDivider } from '../../components/HomeDivider'
import { NeonLightLine } from '../../components/NeonLightLine'

export const HomeCardDeveloper = () => {
  const gifUrl = 'https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif'
  return (
    <Box 
      id='devCard'
      className='flexCol'
      sx={{
        width: '100%',
        height: '100%'
      }}
    >
      {/* <HomeDivider title='Developer' /> */}
      {/* <Box sx={{ width: '100%', height: '20px' }}>
        
      </Box> */}
      

      <Box 
        className='flexRow'
        sx={{
          padding: 20,
          width: '100%',
          gap: 10,
          justifyContent: 'center',
        }}
      >
        <Typography> I'm a Developer!</Typography>
        <Box
          component='img'
          src={gifUrl}
          height={200}
        />
      </Box>

      
    </Box>
  )
}