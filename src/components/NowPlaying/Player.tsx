"use client";

import usePlayerState from "@/app/store/playerState";
import SpotifyPlayer from "react-spotify-web-playback";

interface PlayerProps {
  accessToken: string;
}

const Player = ({ accessToken }: PlayerProps) => {
  const [trackUri, isPlaying, updateIsPlaying] = usePlayerState((state) => [
    state.trackUri,
    state.isPlaying,
    state.updateIsPlaying,
  ]);

  if (!accessToken) return null;

  return (
    <SpotifyPlayer
      token={accessToken}
      uris={trackUri ? [trackUri] : []}
      play={true}
      showSaveIcon
      styles={{
        bgColor: "#000",
        color: "#fff",
        sliderHandleColor: "#282828",
      }}
    />
  );
};

export default Player;
