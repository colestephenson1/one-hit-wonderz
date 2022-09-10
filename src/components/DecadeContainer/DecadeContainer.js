import React from "react";
import "./DecadeContainer.css"
import DecadeCard from "../DecadeCard/DecadeCard";

const DecadeContainer = ({songData}) => {
    console.log('data', songData)
    console.log('object keys', Object.keys(songData))
    const decades = Object.keys(songData)
    const card = decades.map(decade => {
        return <DecadeCard key={Math.random()} decade={decade}/>
    })
    return (
        <div className="decade-container">
            {card}
        </div>
    )
}

export default DecadeContainer