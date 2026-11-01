// Demo-only sign-in. No passwords are stored, checked or sent anywhere.
// Only a display name and email are kept so the navbar can greet the visitor.

export interface DemoUser {
  name: string;
  email: string;
}

const SESSION_KEY = 'creme-crust.demo-session';
const PROFILE_KEY = 'creme-crust.demo-profile';

function readUser(storage: Storage, key: string): DemoUser | null {
  try {
    const raw = storage.getItem(key);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      typeof (parsed as DemoUser).name === 'string' &&
      typeof (parsed as DemoUser).email === 'string'
    ) {
      return { name: (parsed as DemoUser).name, email: (parsed as DemoUser).email };
    }
    return null;
  } catch {
    return null;
  }
}

export function loadSession(): DemoUser | null {
  return readUser(sessionStorage, SESSION_KEY) ?? readUser(localStorage, SESSION_KEY);
}

export function saveSession(user: DemoUser, rememberMe: boolean) {
  const target = rememberMe ? localStorage : sessionStorage;
  const other = rememberMe ? sessionStorage : localStorage;
  other.removeItem(SESSION_KEY);
  target.setItem(SESSION_KEY, JSON.stringify(user));
}

export function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
  localStorage.removeItem(SESSION_KEY);
}

export function saveProfile(user: DemoUser) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(user));
}

export function findProfileName(email: string): string | null {
  const profile = readUser(localStorage, PROFILE_KEY);
  return profile && profile.email.toLowerCase() === email.trim().toLowerCase()
    ? profile.name
    : null;
}

export function nameFromEmail(email: string): string {
  const local = email.split('@')[0] ?? 'Guest';
  const cleaned = local.replace(/[._-]+/g, ' ').trim();
  return cleaned
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') || 'Guest';
}
