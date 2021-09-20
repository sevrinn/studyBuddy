const express = require('express')
const cors = require('cors')
const SpotifyWebApi = require('spotify-web-api-node')
// const bodyParser = require("body-parser")

const app = express();
app.use(cors())  
app.use(express.urlencoded({ extended: true }))

app.use(express.json())


app.post('/refresh', (req,res) =>{
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri:'http://localhost:3000',
        clientId: 'ac73fe63dad24554a8f54b2fbe36d538',
        clientSecret: '5c9f874484a74e8889d675a21ea5760d',
        refreshToken

})

spotifyApi.refreshAccessToken().then(
    (data) => {
      res.json({
          accessToken: data.body.accessToken,
          expiresIn: data.body.expiresIn,
      })
 
      spotifyApi.setAccessToken(data.body['access_token']);
    }).catch(()=>{
        res.sendStatus(400)

    })
})




app.post("/login", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri:'http://localhost:3000',
        clientId: 'ac73fe63dad24554a8f54b2fbe36d538',
        clientSecret: '5c9f874484a74e8889d675a21ea5760d'

    })
    spotifyApi.authorizationCodeGrant(code).then(data =>{
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in

        })

    })
    .catch(err => {
        res.sendStatus(400)

    })


})
app.listen(3001, () => console.log("The server is all fired up on port 3001"));