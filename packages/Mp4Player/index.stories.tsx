import React from "react";
import Mp4Player from "./index";

export default {
  title: "Mp4Player"
};

export const WithMp4Player = () => (
  <Mp4Player
      controls={true}
      autoPlay={false}
      url="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo-720p.mp4"
      style={{
        width: "100%",
      }}
    />
);
