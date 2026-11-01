import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Logo from '@/components/Logo';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import Photo from '@/components/Photo';
import { useAuth } from '@/hooks/useAuth';
import { buttonClasses } from '@/lib/buttonStyles';

const sidePhoto = {
  src: 'https://images.pexels.com/photos/37873398/pexels-photo-37873398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  alt: 'Warm, rustic café interior with dim lighting and empty tables',
};

type AuthMode = 'login' | 'register';

export default function LoginPage() {
  const { user, signOut } = useAuth();
  const [mode, setMode] = useState<AuthMode>('login');

  const isLogin = mode === 'login';

  return (
    <section className="min-h-screen bg-cream pt-28 sm:pt-32 lg:pt-0">
      <div className="grid min-h-[calc(100svh-7rem)] lg:min-h-screen lg:grid-cols-[1fr_1.1fr]">
        <div className="relative hidden overflow-hidden lg:block">
          <Photo src={sidePhoto.src} alt={sidePhoto.alt} priority sizes="45vw" />
          <div className="absolute inset-0 bg-espresso-900/50" aria-hidden="true" />
          <div className="absolute inset-x-12 bottom-12 text-cream">
            <p className="font-serif text-3xl leading-snug">
              &ldquo;Every cup deserves a quiet corner.&rdquo;
            </p>
            <p className="mt-4 text-sm tracking-wide text-beige-100">The Crème &amp; Crust team</p>
          </div>
        </div>

        <div className="flex items-start justify-center px-5 pb-16 pt-6 sm:px-8 lg:items-center lg:pb-16 lg:pt-28">
          <div className="w-full max-w-md">
            <div className="flex items-center justify-between">
              <Link to="/" aria-label="Crème & Crust home" className="inline-flex">
                <Logo />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full px-2 py-2 text-sm font-medium text-espresso transition hover:bg-beige-100 sm:px-3"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                <span className="hidden min-[400px]:inline">Return to Home</span>
                <span className="min-[400px]:hidden">Home</span>
              </Link>
            </div>

            <div className="mt-10 rounded-[2rem] bg-white p-7 shadow-lift sm:p-10">
              {user ? (
                <div className="space-y-6 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-50 text-success-700">
                    <CheckCircle2 size={32} aria-hidden="true" />
                  </span>
                  <div>
                    <h1 className="text-3xl font-medium text-espresso">You are signed in</h1>
                    <p className="mt-3 text-sm text-espresso-500">
                      Signed in as <span className="font-semibold text-espresso">{user.name}</span> ({user.email}).
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link to="/menu" className={buttonClasses('primary', 'w-full')}>
                      Browse the menu
                    </Link>
                    <button type="button" onClick={signOut} className={buttonClasses('secondary', 'w-full')}>
                      Sign out
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div
                    role="group"
                    aria-label="Choose login or registration"
                    className="grid grid-cols-2 rounded-full bg-beige-100 p-1"
                  >
                    {(['login', 'register'] as const).map((option) => {
                      const active = mode === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setMode(option)}
                          className={`rounded-full py-2.5 text-sm font-semibold transition duration-300 ${
                            active ? 'bg-espresso text-cream shadow-soft' : 'text-espresso-500 hover:text-espresso'
                          }`}
                        >
                          {option === 'login' ? 'Login' : 'Create Account'}
                        </button>
                      );
                    })}
                  </div>

                  <div key={mode} className="animate-fade-up mt-8">
                    <h1 className="text-3xl font-medium text-espresso sm:text-4xl">
                      {isLogin ? 'Welcome Back!' : 'Create your account'}
                    </h1>
                    <p className="mt-3 text-sm leading-relaxed text-espresso-500">
                      {isLogin
                        ? 'Sign in for a personal greeting on every visit. Your favourites are saved on this device either way.'
                        : 'Join Crème & Crust to get a personal greeting on every visit.'}
                    </p>
                    <div className="mt-8">
                      {isLogin ? (
                        <LoginForm onSwitchToRegister={() => setMode('register')} />
                      ) : (
                        <RegisterForm onSwitchToLogin={() => setMode('login')} />
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
