import { useState, useEffect } from 'react';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches); // Initial match

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);
    
    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}

export default useMediaQuery;
