import { create } from "zustand";

interface Track {
  trackUri: string;
  trackId: string;
}

interface PlayerState {
  track: Track;
  isPlaying: boolean;
  updateTrack: (uris: string, id: string) => void;
  updateIsPlaying: (bool: boolean) => void;
}

const usePlayerState = create<PlayerState>()((set) => ({
  track: {
    trackId: "",
    trackUri: "",
  },
  isPlaying: false,
  updateTrack: (trackUri, trackId) =>
    set((state) => ({
      track: {
        ...state.track,
        trackUri,
        trackId,
      },
    })),
  updateIsPlaying: (bool) => set(() => ({ isPlaying: bool })),
}));

export default usePlayerState;
