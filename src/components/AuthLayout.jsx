import React, {useEffect, useState}from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Protected({
    children, authentication = true
}){
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if(authentication){

        }
    }, [authStatus, navigate, authentication])

    return(
        <div></div>
    )
}