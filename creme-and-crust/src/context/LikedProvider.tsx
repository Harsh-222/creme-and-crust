import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LikedContext } from '@/context/likedContext';
import { menuItems } from '@/data/menu';
import { readStoredArray, writeStoredArray } from '@/lib/storage';

const LIKED_KEY = 'creme-crust.liked';

const validIds = new Set(menuItems.map((item) => item.id));

// Only ids that still exist on the menu are kept, so stale or corrupted storage is ignored.
function loadLiked(): string[] {
  return readStoredArray(LIKED_KEY).filter((id) => validIds.has(id));
}

// Single source of truth for favourites: every heart button and the Favourites section read from here.
export default function LikedProvider({ children }: { children: ReactNode }) {
  const [likedIds, setLikedIds] = useState<string[]>(loadLiked);

  useEffect(() => {
    writeStoredArray(LIKED_KEY, likedIds);
  }, [likedIds]);

  // Keep several open tabs in sync.
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === LIKED_KEY || event.key === null) setLikedIds(loadLiked());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const toggleLiked = useCallback((id: string) => {
    if (!validIds.has(id)) return;
    setLikedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }, []);

  const clearLiked = useCallback(() => setLikedIds([]), []);

  const value = useMemo(() => {
    const liked = new Set(likedIds);
    return { likedIds, isLiked: (id: string) => liked.has(id), toggleLiked, clearLiked };
  }, [likedIds, toggleLiked, clearLiked]);

  return <LikedContext.Provider value={value}>{children}</LikedContext.Provider>;
}
