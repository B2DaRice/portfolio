import { Box, Button, Typography } from '@mui/material'
import { HomeDivider } from '../../components/HomeDivider'
import { Link } from 'react-router-dom'

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

      <Box 
        className='flexRow'
        sx={{
          padding: 20,
          width: '100%',
          gap: 10,
          justifyContent: 'center',
        }}
      >
        <Box
          component='img'
          src={gifUrl}
          height={200}
        />
      </Box>

      <Box 
        className='flexRow'
        sx={{
          padding: 20,
          width: '100%',
          gap: 10,
          justifyContent: 'center',
        }}
      >
        <Link to='/father/calista'>
          <Button sx={{
            backgroundColor: '#d2d2d2',
            color: '#2d2d2d',
            borderRadius: '999px',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
            padding: '20px 40px',
            fontFamily: 'noName',

            ':hover': {
              backgroundColor: '#DE00D2',
              color: '#49007A'
            }
          }}>
            Calistapher
          </Button>
        </Link>

        <Button sx={{
          backgroundColor: '#d2d2d2',
          color: '#2d2d2d',
          borderRadius: '999px',
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
          padding: '20px 40px',
          fontFamily: 'noName',

          ':hover': {
            backgroundColor: '#00E0E6',
            color: '#002D36'
          }
        }}>
          Roxette
        </Button>

        <Button sx={{
          backgroundColor: '#d2d2d2',
          color: '#2d2d2d',
          borderRadius: '999px',
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
          padding: '20px 40px',
          fontFamily: 'noName',

          ':hover': {
            backgroundColor: '#0F1112',
            color: '#C64343'
          }
        }}>
          Hugh Jax
        </Button>
      </Box>
      
    </Box>
  )
}