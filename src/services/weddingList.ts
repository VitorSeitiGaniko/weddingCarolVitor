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
  console.log('URLs  ==> ', data);
  return data.initPoint;
};

export const getPaymentStatus = async (paymentId: string) => {
  const response = await fetch(`/api/get-payment-status?payment_id=${encodeURIComponent(paymentId)}`);

  const data = await response.json();
  return data;
};
