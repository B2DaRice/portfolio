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
    </Box>
  )
}