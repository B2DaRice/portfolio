import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import { mainTheme } from './theme/mainTheme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeLaptop } from './pages/Home/HomeLaptop';
import { HomeMobile } from './pages/Home/HomeMobile';
import { MainLayout } from './pages/Layout';
import { useScreenSize } from './hooks/helpers';

const bgImgUrl = `${process.env.PUBLIC_URL}/assets/images/dark_stairs.jpeg`

function App() {
  const { isMobile } = useScreenSize()

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
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

      <div className="App" style={{ 
        height: '100vh', 
        width: '100vw', 
        backgroundImage: `url(${bgImgUrl})`,
        backgroundPosition: 'center'
      }}>
        {/* <BackgroundStairs /> */}
        {/* <NameInLights /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={isMobile ? <HomeMobile /> : <HomeLaptop />} />
              {/* <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
