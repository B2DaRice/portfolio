import { Box, Typography } from '@mui/material'
import { HomeDivider } from '../../components/HomeDivider'

export const HomeCardFather = () => {
  const gifUrl = 'https://media.giphy.com/media/c2ALUTZJNBkYw/giphy.gif'
  return (
    <Box 
      id='dadCard'
      className='flexCol'
      sx={{
        width: '100%',
        height: '100%'
      }}
    >
      <HomeDivider title='Father' />

      <Box 
        className='flexRow'
        sx={{
          padding: 20,
          width: '100%',
          gap: 10,
          justifyContent: 'center',
        }}
      >
        <Typography> I'm a Dad!</Typography>
        <Box
          component='img'
          src={gifUrl}
          height={200}
        />
      </Box>

      
    </Box>
  )
}