import React from "react"
import Path from "../photos/Location.png"

export default function Card(props) {
    
    return (
        <div className="card">
            <div>
                <img src={props.item.photo} />
            </div>
            <div className="card--content">
                <div>
                    <div className="card--location">
                        <h2><img src={Path}/> {props.item.country}</h2>
                        <a href={props.item.location}>View on Google Maps</a>
                    </div>
                    <h3 className="card--title">{props.item.title}</h3>
                    <p className="card--time">{props.item.time}</p>
                    <p className="card--description">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}