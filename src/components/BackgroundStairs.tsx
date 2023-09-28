// import { themeOverrides } from '../theme/mainTheme'

const bgImgUrl = `${process.env.PUBLIC_URL}/assets/images/dark_stairs.jpeg`

export const BackgroundStairs = () => (
  <img
    id='bgStair'
    className='bgImage'
    src={ bgImgUrl }
    // style={{ 
    //   backgroundImage: `url(${bgImgUrl})`,
    //   height: '100vh',
    //   filter: 'blur(3px)',
    //   WebkitFilter: 'blur(3px)',
    //   backgroundPosition: 'center',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize: 'cover'
    // }}
  />
  // </div>
)
