import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import type { FieldA11yProps } from '@/components/FormField';

interface PasswordInputProps extends FieldA11yProps {
  value: string;
  onChange: (value: string) => void;
  autoComplete: string;
  placeholder: string;
}

export default function PasswordInput({
  id,
  value,
  onChange,
  autoComplete,
  placeholder,
  ...a11y
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input
        {...a11y}
        id={id}
        type={visible ? 'text' : 'password'}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="field-input pr-14"
      />
      <button
        type="button"
        onClick={() => setVisible((current) => !current)}
        aria-label={visible ? 'Hide password' : 'Show password'}
        aria-pressed={visible}
        className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-espresso-500 transition hover:bg-beige-100 hover:text-espresso"
      >
        {visible ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
      </button>
    </div>
  );
}
