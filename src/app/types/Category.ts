import SpotifyWebApi from "spotify-web-api-node";
const spotifyApi = new SpotifyWebApi();

// Get Tracks type
async function getCategory() {
  return (await spotifyApi.getCategories({limit: 50})).body.categories.items[0]
}
export type Category = Awaited<ReturnType<typeof getCategory>>;