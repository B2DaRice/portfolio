import { useEffect, useState } from 'react';

type Breakpoints = 'desktop' | 'laptop' | 'tablet' | 'mobile';

const findBreakpoint = (width: number) => (
  width > 1650
    ? 'desktop'
    : width > 1250
      ? 'laptop'
      : width > 768
        ? 'tablet'
        : 'mobile'
)

export const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currBreakpoint, setCurrBreakpoint] = useState<Breakpoints>('laptop');

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1251);
    setScreenWidth(window.innerWidth);
    setCurrBreakpoint(findBreakpoint(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    }
  }, []);

  return {
    isMobile,
    screenWidth,
    currBreakpoint
  }
}
