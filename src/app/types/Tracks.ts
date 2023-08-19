import SpotifyWebApi from "spotify-web-api-node";
const spotifyApi = new SpotifyWebApi();

// Get Tracks type
async function getTracks() {
  return (await spotifyApi.searchTracks("example")).body.tracks?.items;
}
export type Tracks = Awaited<ReturnType<typeof getTracks>>;
