import SpotifyWebApi from "spotify-web-api-node";
const spotifyApi = new SpotifyWebApi();

// Get Track type
async function getTrack() {
  return (await spotifyApi.searchTracks("example")).body.tracks?.items[0];
}
export type Track = Awaited<ReturnType<typeof getTrack>>;


// Get Tracks type
async function getTracks() {
  return (await spotifyApi.searchTracks("example")).body.tracks?.items;
}
export type Tracks = Awaited<ReturnType<typeof getTracks>>;
