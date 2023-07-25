import { create } from 'zustand'


interface PlaylistState {
  playlist: object
  updatePlaylist: (id: string, spotifyApi: any) => void
}

const usePlaylistStore = create<PlaylistState>()((set) => ({
  playlist: {},
  updatePlaylist: (id, spotifyApi) => {
    if(spotifyApi.getAccessToken()){
      spotifyApi.getPlaylist(id).then((data: any) => {
        set((state) => ({
          playlist: data.body
        }))
      })
    }
  }
}))

export default usePlaylistStore