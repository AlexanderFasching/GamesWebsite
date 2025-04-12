import { useRef, useState, useEffect } from "react";
import { Button, CircularProgress, Box } from "@mui/material";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;

    // Update the timestamp using setInterval every 100ms
    const interval = setInterval(() => {
      setCurrentTime(audio.currentTime);
    }, 100); // Update every 100ms

    // Clean up interval when the component unmounts or audio stops
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onLoadStart={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => setIsLoading(false)}
      />

      {isLoading ? (
        <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
          <CircularProgress />
        </Box>
      ) : (
        <Button variant="contained" onClick={togglePlay}>
          {isPlaying ? "Pause" : "Play"}
        </Button>
      )}

      {/* Display current timestamp in seconds */}
      <p>Current Time: {currentTime.toFixed(1)} seconds</p>
    </div>
  );
};

export default AudioPlayer;
