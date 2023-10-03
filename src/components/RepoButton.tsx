import { Box, Typography } from '@mui/material'
import { useScreenSize } from '../hooks/helpers'

export const RepoButton = ({}) => {
  const { isMobile } = useScreenSize()

  return (
    <Box
      className='flexRow'
      sx={{
        gap: '20px',
        alignItems: 'center',
      }}
    >
      {!isMobile && (
        <Typography sx={{
          fontFamily: 'noName',
          color: '#b2b2b2'
        }}>
          Hey Hiring Managers!
        </Typography>
      )}

      <a 
        href='https://github.com/B2DaRice/portfolio'
        target="_blank" 
        rel="noreferrer"
        style={{
          textDecoration: 'none'
        }}
      >
        <Box className='flexRow' sx={{
          backgroundColor: '#3c3c3c',
          borderRadius: '10px',
          padding: '2px 2px 2px 5px',
          alignItems: 'center',

          '&:hover': {
            backgroundColor: '#a2a2a2',
            transition: 'background-color 0.3s ease-in-out',

            '& p': {
              color: '#3c3c3c',
              transition: 'color 0.3s ease-in-out',
            }
          }
        }}>
          <Box
            component='img'
            src='/assets/images/logos/social/github_empty.svg'
            sx={{
              height: '30px',
              color: '#a2a2a2'
            }}
          />
          <Typography sx={{
            fontFamily: 'monospace',
            color: '#b2b2b2',
            padding: '5px 10px 5px 5px',
          }}>
            See Source Code Here
          </Typography>
        </Box>
      </a>
    </Box>
  )
}