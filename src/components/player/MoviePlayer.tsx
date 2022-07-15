import ReactPlayer from "react-player";

function MoviePlayer({ url }: { url: string }) {
  return <ReactPlayer playing pip={false} loop width="100%" height="100%" volume={1} muted url={url} />;
}

export default MoviePlayer;
