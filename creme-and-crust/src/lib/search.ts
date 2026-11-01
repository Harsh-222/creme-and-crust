import { menuCategories, type MenuItem } from '@/data/menu';

const categoryLabels = new Map(menuCategories.map((category) => [category.id, category.label]));

// Reduce simple plurals so "cakes" finds "cake" and "sandwiches" finds "sandwich".
function stem(word: string): string {
  if (word.length > 4 && word.endsWith('es')) return word.slice(0, -2);
  if (word.length > 3 && word.endsWith('s')) return word.slice(0, -1);
  return word;
}

// Every word typed must appear in the item's name, description or category.
export function matchesSearch(item: MenuItem, query: string): boolean {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean).map(stem);
  if (words.length === 0) return true;
  const haystack = `${item.name} ${item.description} ${categoryLabels.get(item.category) ?? ''}`.toLowerCase();
  return words.every((word) => haystack.includes(word));
}
