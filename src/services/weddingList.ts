import type { StoreCartItemMercadoPago } from '../utils/interface';
import { API_BASE_URL } from '../utils/constants';

interface PreferenceProps {
  items: Array<StoreCartItemMercadoPago>;
}

export const createPreference = async (items: PreferenceProps) => {
  const response = await fetch(`${API_BASE_URL}/api/create-preference`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(items),
  });

  const data = await response.json();
  console.log('URLs  ==> ', data);
  return data.initPoint;
};
