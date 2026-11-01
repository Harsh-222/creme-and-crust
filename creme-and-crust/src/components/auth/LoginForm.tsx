import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Info, UserRound } from 'lucide-react';
import FormField from '@/components/FormField';
import PasswordInput from '@/components/auth/PasswordInput';
import { useAuth } from '@/hooks/useAuth';
import { buttonClasses } from '@/lib/buttonStyles';
import { findProfileName, nameFromEmail } from '@/lib/demoAuth';
import { validateLogin } from '@/lib/validation';

const DEMO_USER = { name: 'Demo Guest', email: 'demo@cremecrust.demo' };

export default function LoginForm({ onSwitchToRegister }: { onSwitchToRegister: () => void }) {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [values, setValues] = useState({ email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [showRecovery, setShowRecovery] = useState(false);

  const errors = attempted ? validateLogin(values) : {};

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    if (Object.keys(validateLogin(values)).length > 0) return;
    const email = values.email.trim();
    signIn({ name: findProfileName(email) ?? nameFromEmail(email), email }, rememberMe);
    navigate('/');
  };

  const handleDemoLogin = () => {
    signIn(DEMO_USER, rememberMe);
    navigate('/');
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-caramel-300 bg-caramel-100/60 p-4 text-sm leading-relaxed text-espresso">
        <p className="flex items-start gap-2 font-semibold">
          <Info size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
          Demo sign-in only
        </p>
        <p className="mt-1 pl-6 text-espresso-500">
          Any valid email and a password of 8 or more characters will sign you in. Passwords are not stored or
          checked, and this is not secure authentication.
        </p>
      </div>

      <button
        type="button"
        onClick={handleDemoLogin}
        className={buttonClasses('secondary', 'w-full')}
      >
        <UserRound size={18} aria-hidden="true" />
        Try the Demo Login
      </button>

      <div className="flex items-center gap-4 text-xs uppercase tracking-wider text-espresso-300">
        <span className="h-px flex-1 bg-beige-300" /> or sign in <span className="h-px flex-1 bg-beige-300" />
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <FormField id="login-email" label="Email address" error={errors.email}>
          {(a11y) => (
            <input
              {...a11y}
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
              placeholder="you@example.com"
              className="field-input"
            />
          )}
        </FormField>

        <FormField
          id="login-password"
          label="Password"
          error={errors.password}
          action={
            <button
              type="button"
              onClick={() => setShowRecovery((open) => !open)}
              aria-expanded={showRecovery}
              className="text-xs font-semibold text-caramel-700 underline-offset-4 transition hover:text-espresso hover:underline"
            >
              Forgot password?
            </button>
          }
        >
          {(a11y) => (
            <PasswordInput
              {...a11y}
              value={values.password}
              onChange={(password) => setValues((current) => ({ ...current, password }))}
              autoComplete="current-password"
              placeholder="Enter your password"
            />
          )}
        </FormField>

        {showRecovery && (
          <p role="status" className="rounded-xl bg-beige-100 p-4 text-sm leading-relaxed text-espresso-500">
            Password recovery is not available in this demonstration. No emails are sent, and no real account exists
            to reset.
          </p>
        )}

        <label className="flex cursor-pointer items-center gap-3 text-sm text-espresso">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
            className="peer sr-only"
          />
          <span className="flex h-5 w-5 items-center justify-center rounded-md border border-beige-300 bg-white transition peer-checked:border-espresso peer-checked:bg-espresso peer-focus-visible:ring-2 peer-focus-visible:ring-caramel-700 peer-focus-visible:ring-offset-2">
            {rememberMe && <Check size={14} className="text-cream" aria-hidden="true" />}
          </span>
          Remember me on this device
        </label>

        <button type="submit" className={buttonClasses('primary', 'w-full')}>
          Login
        </button>
      </form>

      <p className="text-center text-sm text-espresso-500">
        New to Crème &amp; Crust?{' '}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="font-semibold text-espresso underline-offset-4 transition hover:text-caramel-700 hover:underline"
        >
          Create an account
        </button>
      </p>
    </div>
  );
}
