import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { mainTheme } from './theme/mainTheme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { MainLayout } from './pages/Layout';

const bgImgUrl = `${process.env.PUBLIC_URL}/assets/images/dark_stairs.jpeg`

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />

      <div className="App" style={{ height: '100vh', width: '100vw', backgroundImage: `url(${bgImgUrl})` }}>
        {/* <BackgroundStairs /> */}
        {/* <NameInLights /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
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
