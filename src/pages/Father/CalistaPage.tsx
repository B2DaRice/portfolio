import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const CalistaPage = () => {
  return (
    <Box 
      id='calistaPage'
      className='flexCol'
      sx={{
        width: '100%',
        height: '100%',
        // backgroundColor: '#DE00D2',
        backgroundImage: 'url(https://image.banantees.com/2023/11/all-i-want-for-christmas-is-dean-winchester-supernatural-ugly-christmas-sweater-unique-gift-for-men-and-women.jpg)',
        backgroundSize: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
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
        <Link to='https://www.puravidabracelets.com/products/pura-vida-monthly-club'>
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
            Bracelet Subscription
          </Button>
        </Link>

        <Link to='https://mybillie.com/pages/get-started#step1'>
          <Button sx={{
            backgroundColor: '#d2d2d2',
            color: '#2d2d2d',
            borderRadius: '999px',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
            padding: '20px 40px',
            fontFamily: 'noName',

            ':hover': {
              backgroundColor: '#49007A',
              color: '#DE00D2'
            }
          }}>
            Shaving Subscription
          </Button>
        </Link>

        <Link to='https://www.ceramicaboise.com/paint-pottery-boise-id'>
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
            Pottery Painting w/ Dad
          </Button>
        </Link>
      </Box>

      
      
    </Box>
  )
}