import { createContext } from 'react';
import type { DemoUser } from '@/lib/demoAuth';

export interface AuthContextValue {
  user: DemoUser | null;
  signIn: (user: DemoUser, rememberMe: boolean) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
