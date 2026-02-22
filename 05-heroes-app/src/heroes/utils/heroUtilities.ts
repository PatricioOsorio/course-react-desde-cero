const VALID_TABS = ['all', 'favorites', 'heroes', 'villains'] as const;

export type TStatusTab = (typeof VALID_TABS)[number];

export const toInt = (value: string | null, fallback: number) => {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : fallback;
};

export const toCategory = (value: string | null): string => {
  const v = value ?? 'all';
  return v;
};

export const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

export const toTab = (value: string | null): TStatusTab => {
  const v = (value ?? 'all') as TStatusTab;
  return VALID_TABS.includes(v) ? v : 'all';
};

export const getStringValue = (value: string | null, fallback: string) => {
  const v = value ?? fallback;
  return v.trim() === '' ? fallback : v;
};
