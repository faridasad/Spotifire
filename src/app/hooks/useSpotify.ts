"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useMemo } from "react";
import { Session } from "next-auth";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
});

const useSpotify = () => {

  const { data: session }: any = useSession();

  useEffect(() => {
    if (session) {
      if (session.error === "AccessTokenRefreshError") {
        signIn("spotify", { callbackUrl: "/" });
      }

      spotifyApi.setAccessToken(session?.user?.accessToken);
    }
  }, [session, spotifyApi]);

  return spotifyApi;
};

export default useSpotify;
