import React, { useState } from "react";
import YouTube from "react-youtube";

const Video = () => {
  const [hidden, setHidden] = useState(true);
  let player = null;

  const onReady = (event) => {
    player = event.target;
    player.playVideo(); // Autoplay when ready
  };

  const toggleVideo = () => {
    if (player) {
      const iframe = player.getIframe();
      if (hidden) {
        iframe.style.position = "absolute";
        iframe.style.left = "-10000px"; // Move off-screen
      } else {
        iframe.style.position = "relative";
        iframe.style.left = "0px"; // Bring it back
      }
    }
    setHidden(!hidden);
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      controls: 1,
      mute: 1,
    },
  };

  return (
    <div className="relative w-[640px] h-[390px]">
      {/* YouTube Video */}
      <YouTube videoId="Oflbho9ZG2U" opts={opts} onReady={onReady} />

      {/* Toggle Button */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-2 right-2 bg-white text-black px-4 py-2 rounded"
      >
        {hidden ? "Show Video" : "Hide Video"}
      </button>
    </div>
  );
};

export default Video;
