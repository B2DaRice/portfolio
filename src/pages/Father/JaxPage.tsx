import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const JaxPage = () => {
  return (
    <Box 
      id='jaxPage'
      className='flexCol'
      sx={{
        width: '100%',
        height: '100%',
        backgroundImage: 'url(https://pbs.twimg.com/media/EMn1K5KW4AAy6zV?format=jpg&name=medium)',
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
        <Link to='https://www.annieskitclubs.com/products/young-woodworkers'>
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
            Build w/ Tools Subscription
          </Button>
        </Link>

        <Link to='https://fastlaneboise.com/'>
          <Button sx={{
            backgroundColor: '#d2d2d2',
            color: '#2d2d2d',
            borderRadius: '999px',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
            padding: '20px 40px',
            fontFamily: 'noName',

            ':hover': {
              backgroundColor: '#C64343',
              color: '#0F1112'
            }
          }}>
            Go Karts w/ Dad
          </Button>
        </Link>

        <Link to='https://www.cnet.com/tech/services-and-software/best-ways-to-read-digital-comics-in-2023/'>
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
            Pick One Comic Subscription
          </Button>
        </Link>
      </Box>
    </Box>
  )
}