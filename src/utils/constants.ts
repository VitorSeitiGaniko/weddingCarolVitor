export const WEDDING_LIST = 'wedding-list';

// In dev, '/api' is proxied by vite.config.ts. In production, requests must go directly to the backend.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';
