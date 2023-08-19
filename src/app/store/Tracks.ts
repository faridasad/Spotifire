import { create } from "zustand";
import { Tracks } from "../types/Tracks";

interface TracksState {
  tracks: Tracks;
  updateTracks: (tracks: Tracks) => void;
}

const useTracksStore = create<TracksState>()((set) => ({
  tracks: [],
  updateTracks: (tracks) => set({ tracks }),
}));

export default useTracksStore;
