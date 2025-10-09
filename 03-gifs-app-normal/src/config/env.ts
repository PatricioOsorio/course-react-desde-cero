import { z } from 'zod';

const EnvSchema = z.object({
  VITE_GIPHY_API_KEY: z.string(),
});

const rawEnv = Object.fromEntries(Object.entries(import.meta.env).filter(([k]) => k.startsWith('VITE_'))) as Record<
  string,
  string
>;

const parsed = EnvSchema.safeParse(rawEnv);

if (!parsed.success) {
  console.error('[ENV] Invalid environment variables:', parsed.error.flatten().fieldErrors);
  throw new Error('Environment validation failed. Revisa tus .env*');
}

export const ENV = {
  GIPHY_API_KEY: parsed.data.VITE_GIPHY_API_KEY,
} as const;
