import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const search = location.search;

  useEffect(() => {
    window.scrollTo(0,  0);
  }, [pathname , search]);

  return null; 
};

export default ScrollToTop;
