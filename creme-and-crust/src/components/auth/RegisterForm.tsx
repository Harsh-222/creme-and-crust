import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info } from 'lucide-react';
import FormField from '@/components/FormField';
import PasswordInput from '@/components/auth/PasswordInput';
import { useAuth } from '@/hooks/useAuth';
import { buttonClasses } from '@/lib/buttonStyles';
import { saveProfile } from '@/lib/demoAuth';
import { validateRegister } from '@/lib/validation';

const emptyValues = { name: '', email: '', password: '', confirmPassword: '' };

export default function RegisterForm({ onSwitchToLogin }: { onSwitchToLogin: () => void }) {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [values, setValues] = useState(emptyValues);
  const [attempted, setAttempted] = useState(false);

  const errors = attempted ? validateRegister(values) : {};

  const updateField = (field: keyof typeof emptyValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    if (Object.keys(validateRegister(values)).length > 0) return;
    const user = { name: values.name.trim(), email: values.email.trim() };
    saveProfile(user);
    signIn(user, false);
    navigate('/');
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-caramel-300 bg-caramel-100/60 p-4 text-sm leading-relaxed text-espresso">
        <p className="flex items-start gap-2 font-semibold">
          <Info size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
          Demo registration only
        </p>
        <p className="mt-1 pl-6 text-espresso-500">
          Your name and email are kept on this device so the demo can greet you. Your password is checked for format
          only and is never stored.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <FormField id="register-name" label="Full name" error={errors.name}>
          {(a11y) => (
            <input
              {...a11y}
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={(event) => updateField('name', event.target.value)}
              placeholder="Your full name"
              className="field-input"
            />
          )}
        </FormField>

        <FormField id="register-email" label="Email address" error={errors.email}>
          {(a11y) => (
            <input
              {...a11y}
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => updateField('email', event.target.value)}
              placeholder="you@example.com"
              className="field-input"
            />
          )}
        </FormField>

        <FormField
          id="register-password"
          label="Password"
          error={errors.password}
          hint="At least 8 characters, with a letter and a number."
        >
          {(a11y) => (
            <PasswordInput
              {...a11y}
              value={values.password}
              onChange={(password) => updateField('password', password)}
              autoComplete="new-password"
              placeholder="Create a password"
            />
          )}
        </FormField>

        <FormField id="register-confirm" label="Confirm password" error={errors.confirmPassword}>
          {(a11y) => (
            <PasswordInput
              {...a11y}
              value={values.confirmPassword}
              onChange={(confirmPassword) => updateField('confirmPassword', confirmPassword)}
              autoComplete="new-password"
              placeholder="Re-enter your password"
            />
          )}
        </FormField>

        <button type="submit" className={buttonClasses('primary', 'w-full')}>
          Create Account
        </button>
      </form>

      <p className="text-center text-sm text-espresso-500">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="font-semibold text-espresso underline-offset-4 transition hover:text-caramel-700 hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
}
