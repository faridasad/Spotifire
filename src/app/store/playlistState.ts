import { create } from "zustand";
import { PlaylistTypes } from "../types/PlaylistType";

interface PlaylistState {
  playlist: PlaylistTypes;
  updatePlaylist: (id: string, spotifyApi: any) => void;
}

const usePlaylistStore = create<PlaylistState>()((set) => ({
  playlist: {} as PlaylistTypes,
  updatePlaylist: (id, spotifyApi) => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getPlaylist(id).then((data: any) => {
        set((state) => ({
          playlist: data.body,
        }));
      });
    }
  },
}));

export default usePlaylistStore;
