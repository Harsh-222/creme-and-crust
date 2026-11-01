import type { ReactNode } from 'react';
import { CircleAlert } from 'lucide-react';

export interface FieldA11yProps {
  id: string;
  'aria-invalid': boolean;
  'aria-describedby': string | undefined;
}

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  action?: ReactNode;
  children: (props: FieldA11yProps) => ReactNode;
}

export default function FormField({ id, label, error, hint, action, children }: FormFieldProps) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = error ? errorId : hint ? hintId : undefined;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium text-espresso">
          {label}
        </label>
        {action}
      </div>
      {children({ id, 'aria-invalid': Boolean(error), 'aria-describedby': describedBy })}
      {hint && !error && (
        <p id={hintId} className="text-xs text-espresso-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="flex items-start gap-2 text-sm text-error-700">
          <CircleAlert size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
