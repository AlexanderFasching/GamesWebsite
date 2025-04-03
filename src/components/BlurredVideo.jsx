import Video from "./Video";

export default function BlurredVideo() {
  return (
    <div className="relative w-[640px] h-[390px]">
      {/* YouTube Video */}
      <Video></Video>

      {/* Blur Overlay */}
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-lg bg-white/30"></div>
    </div>
  );
}
