// Reads a list of strings from localStorage. Missing, corrupted or non-array data returns an empty list,
// and duplicate entries are removed.
export function readStoredArray(key: string): string[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return [...new Set(parsed.filter((item): item is string => typeof item === 'string'))];
  } catch {
    return [];
  }
}

export function writeStoredArray(key: string, value: string[]) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be unavailable (private mode, quota); favourites then last for the current visit only.
  }
}
