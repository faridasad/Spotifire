import SpotifyWebApi from "spotify-web-api-node";
const spotifyApi = new SpotifyWebApi();

// Get Category type
async function getCategory() {
  return (await spotifyApi.getCategories({limit: 2})).body.categories.items[0]
}
export type Category = Awaited<ReturnType<typeof getCategory>>;

// Get Categories type
async function getCategories() {
  return (await spotifyApi.getCategories({limit: 2})).body.categories.items
}
export type Categories = Awaited<ReturnType<typeof getCategories>>;