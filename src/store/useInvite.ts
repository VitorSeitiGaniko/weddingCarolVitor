import { createRef, type RefObject } from 'react';
import { create } from 'zustand';

interface StoreCartState {
  showInviteScreem: boolean;
  setShowInviteScreem: (show: boolean) => void;
  audioRef: RefObject<HTMLAudioElement | null>;
}

export const useInviteStore = create<StoreCartState>((set) => ({
  showInviteScreem: true,
  setShowInviteScreem: (state: boolean) => set({ showInviteScreem: state }),
  audioRef: createRef<HTMLAudioElement>(),
}));
