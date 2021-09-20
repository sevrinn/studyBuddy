import React, { useEffect, useState } from 'react'
import axois from 'axios'

const useAuth = (code) =>{

    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() =>{
        axois.post("http://localhost:3001/login", {
            code,
        }).then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)

            window.history.pushState({}, null,"/")
        }).catch(() => {
            window.location = '/'
        })
    }, [code])

    useEffect(()=>{
        if (!refreshToken || !expiresIn) return

        const interval = setInterval(() =>{
            axois.post("http://localhost:3001/refresh", {
                refreshToken,
            }).then(res => {
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn)
    
    
            }).catch(() => {
                window.location = '/'
            })



        }, (expiresIn - 60) * 1000)
        return ()=> clearInterval(interval)



    }, [refreshToken, expiresIn])

    return accessToken


}

export default useAuth;

