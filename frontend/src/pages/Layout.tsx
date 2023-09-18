import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { RouteLinks } from '../components/RouteLinks'

export const MainLayout = () => {
  return (  
    
    <Box
      className='flexCol'
      sx={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Scrollbars style={{ width: '100%' }}>
        <Outlet />
      </Scrollbars>
    </Box>
  )
}