import { useState } from "react";

export default function EmbedPlaylist({ playlistId, playlistName }) {
  const [embedId, setEmbedId] = useState();
  const [embedUrl, setEmbedUrl] = useState();
  function handleOnClick(playlistId) {
    setEmbedId(playlistId);
    console.log(embedId);
    setEmbedUrl(`https://open.spotify.com/embed/playlist/${embedId}`);
    console.log(embedUrl);
  }

  return (
    <>
      <div
        className="d-flex m-2 align-items-center"
        style={{ cursor: "pointer" }}
      >
        <button onClick={(e) => handleOnClick(playlistId)}>
          {playlistName}
        </button>
      </div>
      <div>
        <iframe
          src={embedUrl}
          width="40%"
          height="380"
          frameBorder="0"
          title="player"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </>
  );
}
