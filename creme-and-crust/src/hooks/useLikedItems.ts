import { useContext } from 'react';
import { LikedContext, type LikedContextValue } from '@/context/likedContext';

export function useLikedItems(): LikedContextValue {
  const context = useContext(LikedContext);
  if (!context) throw new Error('useLikedItems must be used inside LikedProvider');
  return context;
}
