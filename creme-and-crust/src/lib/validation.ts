export type FieldErrors<T extends string> = Partial<Record<T, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

export function getPasswordError(password: string): string | undefined {
  if (password.length < 8) return 'Password must be at least 8 characters.';
  if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) {
    return 'Use at least one letter and one number.';
  }
  return undefined;
}

export function validateEmailField(email: string): string | undefined {
  if (!email.trim()) return 'Please enter your email address.';
  if (!isValidEmail(email)) return 'Please enter a valid email, such as name@example.com.';
  return undefined;
}

export function validateLogin(values: { email: string; password: string }) {
  const errors: FieldErrors<'email' | 'password'> = {};
  const emailError = validateEmailField(values.email);
  if (emailError) errors.email = emailError;
  if (!values.password) errors.password = 'Please enter your password.';
  else if (values.password.length < 8) errors.password = 'Password must be at least 8 characters.';
  return errors;
}

export function validateRegister(values: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) {
  const errors: FieldErrors<'name' | 'email' | 'password' | 'confirmPassword'> = {};
  if (!values.name.trim()) errors.name = 'Please enter your full name.';
  else if (values.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';
  const emailError = validateEmailField(values.email);
  if (emailError) errors.email = emailError;
  const passwordError = getPasswordError(values.password);
  if (passwordError) errors.password = passwordError;
  if (!values.confirmPassword) errors.confirmPassword = 'Please confirm your password.';
  else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match.';
  }
  return errors;
}

export function validateContact(values: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const errors: FieldErrors<'name' | 'email' | 'subject' | 'message'> = {};
  if (!values.name.trim()) errors.name = 'Please enter your full name.';
  const emailError = validateEmailField(values.email);
  if (emailError) errors.email = emailError;
  if (!values.subject) errors.subject = 'Please choose a subject.';
  if (!values.message.trim()) errors.message = 'Please write a message.';
  else if (values.message.trim().length < 10) {
    errors.message = 'Your message should be at least 10 characters.';
  }
  return errors;
}
