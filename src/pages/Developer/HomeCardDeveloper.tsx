import { Box, Typography } from '@mui/material'
import { HomeDivider } from '../../components/HomeDivider'
import { NeonLightLine } from '../../components/NeonLightLine'
import { useEffect, useState } from 'react';

type IconType = {
  title: string;
  src: string;
  addPadding?: boolean;
}

const iconConfigs: IconType[] = [
  {
    title: 'JavaScript',
    src: '/assets/images/logos/tech/javascript.svg'
  },
  {
    title: 'TypeScript',
    src: '/assets/images/logos/tech/typescript.svg'
  },
  {
    title: 'React',
    src: '/assets/images/logos/tech/react.svg',
    addPadding: true
  },
  {
    title: 'Node JS',
    src: '/assets/images/logos/tech/node-js.svg'
  },
  {
    title: 'C#',
    src: '/assets/images/logos/tech/csharp.svg'
  },
  {
    title: 'Material UI',
    src: '/assets/images/logos/tech/material-ui.svg'
  },
  {
    title: 'Vue',
    src: '/assets/images/logos/tech/vue-js.svg'
  },
  {
    title: 'Tailwind CSS',
    src: '/assets/images/logos/tech/tailwind-css.svg',
    addPadding: true
  },
  {
    title: 'VS Code',
    src: '/assets/images/logos/tech/vs-code.svg'
  },
]

export const HomeCardDeveloper = () => {
  const gifUrl = 'https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif'
  // const [iconConfigs, setIconConfigs] = useState<IconType[]>([
  //   {
  //     title: 'JavaScript',
  //     src: '/assets/images/logos/tech/javascript.svg',
  //     isDisplayed: true
  //   },
  //   {
  //     title: 'TypeScript',
  //     src: '/assets/images/logos/tech/typescript.svg'
  //   },
  //   {
  //     title: 'React',
  //     src: '/assets/images/logos/tech/react.svg'
  //   },
  //   {
  //     title: 'Node JS',
  //     src: '/assets/images/logos/tech/node-js.svg'
  //   },
  //   {
  //     title: 'C#',
  //     src: '/assets/images/logos/tech/csharp.svg'
  //   },
  //   {
  //     title: 'Material UI',
  //     src: '/assets/images/logos/tech/material-ui.svg'
  //   },
  //   {
  //     title: 'Vue',
  //     src: '/assets/images/logos/tech/vue-js.svg'
  //   },
  //   {
  //     title: 'Tailwind CSS',
  //     src: '/assets/images/logos/tech/tailwind-css.svg'
  //   },
  //   {
  //     title: 'VS Code',
  //     src: '/assets/images/logos/tech/vs-code.svg'
  //   },
  // ])

  return (
    <Box 
      id='devCard'
      className='flexCol'
      sx={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <Box sx={{
        padding: '110px 175px 0 0',
        width: '100%',
        height: '250px',
      }}>
        {
          iconConfigs.map(({ title, src, addPadding }, index) => 
            <Box
              key={title}
              component='img'
              src={src}
              width='175px'
              padding={addPadding ? '8px' : '0'}
              sx={{
                position: 'absolute',
                filter: 'drop-shadow(0 0 10px black)',
                animation: 'rotateClockwise 30s linear reverse infinite',
                animationTimingFunction: 'ease-out',
                animationDelay: `-${index * 3.4}s`,
                '&:hover': {
                  scale: 1.2,
                }
              }}
            />
          )
        }
      </Box>

      <Box className='flexCol' sx={{
        width: '1250px',
        padding: '60px 50px',
        fontFamily: 'sans-serif',
        backgroundColor: '#0f0f0f',
        border: '1px solid #c2c2c2',
        // boxShadow: '0 0 40px 1px #E900FF',
        borderRadius: '10px',
        gap: '20px',
      }}>
        <Typography align='left' sx={{
          // fontFamily: 'sans-serif',
          fontSize: '1.5em',
          color: '#c2c2c2',
        }}>
          {`
            As a software developer, I have a passion for creating innovative and impactful web solutions.
          `}
        </Typography>
        
        <Typography align='left' sx={{
          // fontFamily: 'sans-serif',
          fontSize: '1.5em',
          color: '#c2c2c2',
        }}>
          {`
            I have over six years of experience in building scalable single-page applications (SPAs) for SaaS or
            direct-to-consumer business models, using various SPA frameworks such as React/Next, Vue, Svelte, Meteor, 
            etc.  With over eight years of total experience as a software developer.
          `}
        </Typography>

        <Typography align='left' sx={{
          // fontFamily: 'sans-serif',
          fontSize: '1.5em',
          color: '#c2c2c2',
        }}>
          {`
            I have a deep understanding of component structure and hierarchy in SPA solutions, and I am proficient in
            JavaScript/TypeScript, Python, and C#. I am also skilled in building RESTful APIs and microservices to 
            serve SPA data requirements, and I have a passion for working with styling and component layout to deliver 
            beautiful, performant user experiences. Some of the projects and features that I have contributed to 
            include adding components, pages, routes, and data aggregation for new features and expanded usability, 
            changing component architecture of key components to be more efficient and reactive, making changes to API 
            including adding/changing functions, data models, and SQL calls in C#.
          `}
        </Typography>

        <Typography align='left' sx={{
          // fontFamily: 'sans-serif',
          fontSize: '1.5em',
          color: '#c2c2c2',
        }}>
          {`
            I am always eager to learn new technologies and frameworks, and I have completed multiple courses in web 
            development and/or architecture/frameworks, such as Vue, Tailwind CSS, Svelte, Single Page Application 
            architecture, and more. My goal is to create innovative and impactful web solutions that improve the lives 
            and health of people around the world.
          `}
        </Typography>
      </Box>

      {/* <Box 
        className='flexRow'
        sx={{
          padding: '20px',
          width: '100%',
          gap: 10,
          justifyContent: 'center',
        }}
      >
        <Typography> I'm a Developer!</Typography>
        <Box
          component='img'
          src={gifUrl}
          height={200}
        />
      </Box> */}

      
    </Box>
  )
}