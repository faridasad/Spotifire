"use client";

import { signIn, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

const useSpotify = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      if (session.error === "AccessTokenRefreshError") {
        signIn("spotify", { callbackUrl: "/" });
      }

      spotifyApi.setAccessToken(session?.user?.accessToken);
    }
  }, [session]);

  return spotifyApi;
};

export default useSpotify;
