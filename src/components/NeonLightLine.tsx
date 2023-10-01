import { Box } from '@mui/material'

export type NeonLineConfig = {
  size?: number;
  radius?: number;
  color?: string;
  rotate?: number;
  translate?: number;
  opacity?: number;
  reverse?: boolean;
  flicker?: number;
}

type NeonLightLineProps = {
  lineType: 'purple' | 'lightPurple' | 'white', 
  height: string,
  lineOptions?: NeonLineConfig
}

export const NeonLightLine = ({
  lineType,
  height,
  lineOptions = {}
}: NeonLightLineProps) => {
  const lineConfigs: { [key: string]: NeonLineConfig } = {
    purple: {
      size: 10,
      radius: 2,
      color: '#E900FF',
      opacity: .60
    },
    lightPurple: {
      size: 20,
      radius: 3,
      color: '#E900FF',
      opacity: 0.5
    },
    white: {
      size: 30,
      radius: 5,
      color: 'white',
      opacity: 0.50
    },
  }

  const newLineConfig = { ...lineConfigs[lineType], ...lineOptions }
  const {
    color = '',
    reverse = false,
    ...numProps
  } = newLineConfig

  let nums: { [key: string]: number } = { ...numProps }
  if (reverse) {
    Object.keys(numProps).forEach( key => nums[key] = nums[key] * -1 )
  }
  const {
    size, 
    radius, 
    rotate = 0, 
    translate = 0, 
    opacity,
    flicker = 0,
  } = nums

  const lineStyles =  {
    width: '100%',
    zIndex: color === 'white' ? 6 : 7,
    opacity,

    "& .MuiBox-root": {
      width: '100%',
      backgroundColor: color,
      boxShadow: `0 0 ${size}px ${radius}px ${color}`,
      transform: `rotate(${rotate}deg) translateY(${translate}px)`,
      animation: flicker ? `flickerName ${flicker}s linear reverse infinite` : ''
    }
  }

  return (
    <Box sx={lineStyles} >
      <Box sx={{ height }} />
    </Box>
  )
}