import SpotifyWebApi from "spotify-web-api-node";
const spotifyApi = new SpotifyWebApi();

// Get Playlist type
async function getPlaylist() {
  return (await spotifyApi.searchTracks("example")).body.tracks?.items[0];
}
export type Track = Awaited<ReturnType<typeof getPlaylist>>;


// Get Playlists type
async function getPlaylists() {
  return (await spotifyApi.searchTracks("example")).body.tracks?.items;
}
export type Tracks = Awaited<ReturnType<typeof getPlaylists>>;
