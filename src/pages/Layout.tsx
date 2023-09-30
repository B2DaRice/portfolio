import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars-2'

export const MainLayout = () => {
  return (  
    <Box
      className='flexCol'
      sx={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Scrollbars id='scrollContainer' style={{ width: '100%', overflowX: 'hidden' }}>
        <Outlet />
      </Scrollbars>
      <Box
        component='img'
        src='/assets/images/under_construction.png'
        sx={{
          zIndex: 100,
          position: 'fixed',
          top: -110,
          left: -100,
          transform: 'rotate(-40deg)',
          transition: 'top 0.5s ease-in-out',
        }}
      />
    </Box>
  )
}