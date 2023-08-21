import { options } from "@/app/api/auth/[...nextauth]/options";
import spotifyApi from "@/lib/spotify";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FC } from "react"

interface SearchProps {
    params: {
        query: string
    }
}

const Search: FC<SearchProps> = async ({params}) => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin/spotify");
  }

  spotifyApi.setAccessToken(session?.user?.accessToken as string);


  /* const artists = (await spotifyApi.searchArtists('Kendr', {limit: 3})).body.artists
  const tracks = (await spotifyApi.searchTracks('Kendr', {limit: 3})).body.tracks

  console.log('tracks', tracks)
  console.log('artists', artists) */

  return (
    <div>{params.query}</div>
  )
}

export default Search