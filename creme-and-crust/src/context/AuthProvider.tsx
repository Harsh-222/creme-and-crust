import { useState, type ReactNode } from 'react';
import { AuthContext } from '@/context/authContext';
import { clearSession, loadSession, saveSession, type DemoUser } from '@/lib/demoAuth';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(() => loadSession());

  const signIn = (nextUser: DemoUser, rememberMe: boolean) => {
    saveSession(nextUser, rememberMe);
    setUser(nextUser);
  };

  const signOut = () => {
    clearSession();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
  );
}
