import SearchCategories from "@/components/SearchCategories";
import spotifyApi from "@/lib/spotify";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Search = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin/spotify");
  }

  spotifyApi.setAccessToken(session?.user?.accessToken as string);

  const categories = (await spotifyApi.getCategories({ limit: 50 })).body
    .categories.items;

  return <SearchCategories categories={categories} />;
};

export default Search;
