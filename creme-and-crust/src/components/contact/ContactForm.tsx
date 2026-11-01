import { useEffect, useRef, useState, type FormEvent } from 'react';
import { CheckCircle2, Info, Send } from 'lucide-react';
import FormField from '@/components/FormField';
import { validateContact } from '@/lib/validation';
import { buttonClasses } from '@/lib/buttonStyles';

const subjectOptions = [
  'General enquiry',
  'Table booking',
  'Catering & events',
  'Feedback',
  'Other',
];

const emptyValues = { name: '', email: '', subject: '', message: '' };

export default function ContactForm() {
  const [values, setValues] = useState(emptyValues);
  const [attempted, setAttempted] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [submitCount, setSubmitCount] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  const errors = attempted ? validateContact(values) : {};

  useEffect(() => {
    if (submitCount === 0) return;
    formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
  }, [submitCount]);

  const updateField = (field: keyof typeof emptyValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    setSubmitCount((count) => count + 1);
    if (Object.keys(validateContact(values)).length > 0) return;
    setSentTo(values.name.trim().split(' ')[0]);
  };

  const reset = () => {
    setValues(emptyValues);
    setAttempted(false);
    setSentTo(null);
  };

  if (sentTo) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-white p-10 text-center shadow-soft" role="status">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success-50 text-success-700">
          <CheckCircle2 size={34} aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-2xl font-medium text-espresso">Thank you, {sentTo}!</h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-espresso-500">
          Your message passed every validation check. This is a frontend demonstration, so it has not been sent to
          Crème &amp; Crust. A live café would connect this form to an email service or a helpdesk tool.
        </p>
        <button type="button" onClick={reset} className={buttonClasses('secondary', 'mt-8')}>
          Send another message
        </button>
      </div>
    );
  }

  const inputClass = 'field-input';

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-white p-8 shadow-soft sm:p-10"
      aria-labelledby="contact-form-title"
    >
      <h3 id="contact-form-title" className="text-2xl font-medium text-espresso">
        Send us a message
      </h3>
      <p className="mt-2 flex items-start gap-2 rounded-2xl bg-warning-50 p-4 text-xs leading-relaxed text-warning-700">
        <Info size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
        This form is a frontend demonstration only. It does not send your message to the café.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <FormField id="contact-name" label="Full name" error={errors.name}>
            {(a11y) => (
              <input
                {...a11y}
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(event) => updateField('name', event.target.value)}
                placeholder="Your full name"
                className={inputClass}
              />
            )}
          </FormField>
        </div>
        <div className="sm:col-span-1">
          <FormField id="contact-email" label="Email address" error={errors.email}>
            {(a11y) => (
              <input
                {...a11y}
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => updateField('email', event.target.value)}
                placeholder="you@example.com"
                className={inputClass}
              />
            )}
          </FormField>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <FormField id="contact-subject" label="Subject" error={errors.subject}>
          {(a11y) => (
            <select
              {...a11y}
              value={values.subject}
              onChange={(event) => updateField('subject', event.target.value)}
              className={inputClass}
            >
              <option value="">Choose a subject</option>
              {subjectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </FormField>

        <FormField
          id="contact-message"
          label="Message"
          error={errors.message}
          hint="At least 10 characters."
        >
          {(a11y) => (
            <textarea
              {...a11y}
              rows={5}
              value={values.message}
              onChange={(event) => updateField('message', event.target.value)}
              placeholder="How can we help?"
              className={`${inputClass} resize-y`}
            />
          )}
        </FormField>
      </div>

      <button type="submit" className={buttonClasses('primary', 'mt-8 w-full sm:w-auto')}>
        <Send size={16} aria-hidden="true" />
        Send Message
      </button>
    </form>
  );
}
