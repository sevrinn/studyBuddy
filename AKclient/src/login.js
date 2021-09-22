import React from "react";
import logo from './logo.png';
import { Container } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=b5f68b9868264119a0e7915feb40cb81&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-modify-private%20playlist-read-private%20playlist-read-collaborative";

export default function Login() {
  return (
    <Container
      className="d-flex flex-column justify-content-around align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <img className="mb-3" src={logo} alt="studyBuddy logo" style={{marginTop:-200}}/>
      <a className="btn btn-outline-light btn-lg" href={AUTH_URL} style={{marginTop:-700,color:"rgb(92, 48, 92)"}}>
        Login With Spotify
      </a>
    </Container>
  );
}
