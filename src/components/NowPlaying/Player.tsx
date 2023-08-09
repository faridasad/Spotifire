"use client";

import usePlayerState from "@/app/store/playerState";
import SpotifyPlayer from "react-spotify-web-playback";

interface PlayerProps {
  accessToken: string;
}

const Player = ({ accessToken }: PlayerProps) => {
  if (!accessToken) return null;

  const [track, isPlaying] = usePlayerState((state) => [
    state.track,
    state.isPlaying,
  ]);

  return (
    <SpotifyPlayer
      token={accessToken}
      uris={track.trackUri ? [track.trackUri] : []}
      play={isPlaying}
      showSaveIcon
      initialVolume={50}
      styles={{
        bgColor: "#000",
        color: "#fff",
        sliderHandleColor: "#FFFFFF",
        activeColor: "#1ed760",
        sliderColor: "#1ed760",
        trackNameColor: "#FFFFFF",
        trackArtistColor: "#FFFFFF",
      }}
    />
  );
};

export default Player;
