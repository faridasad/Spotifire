"use client";

import { signIn, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import spotifyApi from "../../../lib/spotify";
import { Session } from "next-auth";

const useSpotify = () => {
  const { data: session }: any = useSession();

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
