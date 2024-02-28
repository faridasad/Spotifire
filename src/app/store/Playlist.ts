import { create } from "zustand";
import { Playlist } from "../types/Playlist";

interface PlaylistState {
  playlist: Playlist;
  updatePlaylist: (id: string, spotifyApi: any) => void;
}

const usePlaylistStore = create<PlaylistState>()((set) => ({
  playlist: {} as Playlist,
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
