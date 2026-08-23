import { create } from 'zustand';
import type { StoreCartItem } from '../utils/interface';

interface StoreCartState {
  cart: Array<StoreCartItem>;
  addToCart: (item: StoreCartItem) => void;
  removeFromCart: (itemId: string) => void;
}

export const useStoreCart = create<StoreCartState>((set) => ({
  cart: [],
  addToCart: (item: StoreCartItem) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (itemId: string) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== itemId) })),
}));
