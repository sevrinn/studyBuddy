import React from 'react'
import { Container } from 'react-bootstrap'


const Auth_URL = "https://accounts.spotify.com/authorize?client_id=ac73fe63dad24554a8f54b2fbe36d538&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login(){
    return <Container>
        <a className="btn btn-success btn-lg" href={Auth_URL}>Login with Spotify</a>



    </Container>




}