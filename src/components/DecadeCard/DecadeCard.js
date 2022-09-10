import React from "react";
import "./DecadeCard.css"

const DecadeCard = ({decade}) => {
    return (
        <div className="decade-card">
            <h2>{decade} Hits</h2>
        </div>
    )
}

export default DecadeCard