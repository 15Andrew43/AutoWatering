import React from 'react'




export default function Card({ card }) {
    let id = card.id;
    if (id % 2) {
        return (
            <div className="card">
                <img className="photo" src={"img/" + card.img} alt="..."></img>
                <div className="card-text">
                    {card.text}
                </div>
            </div>
        )
    } 
    return (
        <div className="card">
            <div className="card-text">
                {card.text}
            </div>
            <img className="photo" src={"img/" + card.img} alt="..."></img>
        </div>
    )
}