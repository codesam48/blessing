import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection, scrollToTop } from '../utils/scroll.js';

// Navigates to a homepage section from anywhere (including case-study pages).
export default function useSectionNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return useCallback(
    (id) => {
      const go = () => (id === 'home' ? scrollToTop() : scrollToSection(id));
      if (location.pathname === '/') {
        go();
      } else {
        navigate('/');
        // Wait for the home page to mount before scrolling.
        setTimeout(go, 80);
      }
    },
    [location.pathname, navigate]
  );
}
