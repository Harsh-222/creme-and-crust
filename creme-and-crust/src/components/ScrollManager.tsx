import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const pathChanged = previousPath.current !== pathname;
    previousPath.current = pathname;

    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    // Changing only the query string (for example the menu category filter) must not jump to the top.
    if (pathChanged) window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [key, pathname, hash]);

  return null;
}
