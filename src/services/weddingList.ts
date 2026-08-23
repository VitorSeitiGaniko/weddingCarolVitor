import type { StoreCartItemMercadoPago } from '../utils/interface';

interface PreferenceProps {
  items: Array<StoreCartItemMercadoPago>;
}

export const createPreference = async (items: PreferenceProps) => {
  const response = await fetch('/api/create-preference', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(items),
  });

  const data = await response.json();
  console.log('initPoint:', data);
  return data.sandbox_init_point;
};
