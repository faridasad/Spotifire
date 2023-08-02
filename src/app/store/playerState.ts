import { create } from "zustand";

interface PlayerState {
  trackUri: string;
  isPlaying: boolean;
  updateTrackUri: (uris: string) => void;
  updateIsPlaying: (bool: boolean) => void
}

const usePlayerState = create<PlayerState>()((set) => ({
  trackUri: "",
  isPlaying: false,
  updateTrackUri: (trackUri) => set(() => ({ trackUri })),
  updateIsPlaying: (bool) => set(() => ({isPlaying: bool}))
}));

export default usePlayerState;
