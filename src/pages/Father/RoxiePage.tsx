import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const RoxiePage = () => {
  return (
    <Box 
      id='roxiePage'
      className='flexCol'
      sx={{
        width: '100%',
        height: '100%',
        backgroundImage: 'url(https://64.media.tumblr.com/e22ebc69e6be46a007e3159ca3d94699/tumblr_p1hr8xlC9J1v899jyo1_1280.png)',
        backgroundSize: 'cover',
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
        <Link to='https://chicanduniquepack.com/collections/subscribe-and-save/products/one-month'>
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
            Goodie Bag Subscription
          </Button>
        </Link>

        <Link to='https://www.bestbuy.com/site/sku/6477031.p?skuId=6477031'>
          <Button sx={{
            backgroundColor: '#d2d2d2',
            color: '#2d2d2d',
            borderRadius: '999px',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
            padding: '20px 40px',
            fontFamily: 'noName',

            ':hover': {
              backgroundColor: '#002D36',
              color: '#00E0E6'
            }
          }}>
            New Printer
          </Button>
        </Link>

        <Link to='https://www.allure.com/story/two-toned-mullet-hair-color-trend'>
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
            New Haircut w/ Color
          </Button>
        </Link>
      </Box>
      
    </Box>
  )
}