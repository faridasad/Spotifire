import SpotifyWebApi from "spotify-web-api-node";
const spotifyApi = new SpotifyWebApi();

// Get Tracks type
async function getCategories() {
  return (await spotifyApi.getCategories({limit: 50})).body.categories.items
}
export type Categories = Awaited<ReturnType<typeof getCategories>>;