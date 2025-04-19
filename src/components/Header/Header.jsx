import React from "react"
import {Container, Logo, LogoutBtn} from "../index"
import { Link} from "react-router-dom"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
 

function Header() {
    const authStatus = useSelector((state) => {state.auth})
    return (
        <>
        <h1>
            header
        </h1>
        </>
    )
}

export default Header