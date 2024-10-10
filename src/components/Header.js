import React from "react"
import GlobeIcon from "../photos/Globe.png"

export default function Header() {
    return (
        <div className="header">
            <img src={GlobeIcon} alt="Globe Icon" />
            <h1>my travel journal.</h1>
        </div>
    )
}