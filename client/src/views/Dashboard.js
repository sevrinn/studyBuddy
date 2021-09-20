import { useState, useEffect } from "react"

import React from 'react'
import useAuth from '../components/useAuth';
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
    clientId: "ac73fe63dad24554a8f54b2fbe36d538",
  })


const Dashboard = ({code}) => {
    const accessToken = useAuth(code)

    useEffect(()=> {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
        
    }, [accessToken])
    return (
        <div>
            {code}
     

        </div>


    )


}
export default Dashboard;

