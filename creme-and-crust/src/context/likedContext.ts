import { createContext } from 'react';

export interface LikedContextValue {
  likedIds: string[];
  isLiked: (id: string) => boolean;
  toggleLiked: (id: string) => void;
  clearLiked: () => void;
}

export const LikedContext = createContext<LikedContextValue | null>(null);
