interface IEnvConfig {
  API_URL: string;
}

function getEnv(): IEnvConfig {
  const { VITE_API_URL } = import.meta.env;

  if (!VITE_API_URL) {
    throw new Error('VITE_API_URL is not defined');
  }

  return {
    API_URL: VITE_API_URL,
  };
}

export const ENV = getEnv();
