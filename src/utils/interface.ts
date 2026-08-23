export interface StoreCartItem {
  id: string;
  quantity: number;
  title: string;
  description: string;
  unit_price: number;
  image: string;
  currency_id: string;
  available: boolean;
}

export interface StoreCartItemMercadoPago {
  quantity: number;
  title: string;
  unit_price: number;
  currency_id: string;
}
