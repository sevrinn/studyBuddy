import { useState, useEffect, Component } from "react";
import useAuth from "./useAuth";
import { Container, Form } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";
import Timer from "./Components/Timer";
import SelectColor from "./Components/SelectColor"
import logo from './logo.png';

const spotifyApi = new SpotifyWebApi({
  clientId: "b5f68b9868264119a0e7915feb40cb81",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchPlaylists(search).then((res) => {
      console.log(res);
      if (cancel) return;
      setSearchResults(
        res.body.playlists.items.map((playlist) => {
          return {
            playlistName: playlist.name,
            uri: playlist.uri,
            id: playlist.id,
          };
        })
      );
    });
    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <Container className="d-flex flex-column py-2" style={{ height: "100vh"}}>
    <div>
    <img className="mb-3" src={logo} alt="studyBuddy logo" />
    </div>
    
      <Timer />
      <div>
        <SelectColor/>
      </div>
      <Form.Control
        type="search"
        placeholder="Search Playlists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{width:"75rem", marginLeft:47}}
      />
      <div style={{marginTop:20}}>
        {searchResults.map((playlist) => (
          <iframe
            src={`https://open.spotify.com/embed/playlist/${playlist.id}`}
            width="300"
            height="380"
            frameborder="0"
            title="player"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        ))}
      </div>
    </Container>
  );
}
