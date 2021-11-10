import React from 'react'

import Card from './Card'


export default function PrintCards(props) {
    return (
        props.cards.map((card) => 
                <Card card={card} key={card.id}></Card>
        )
    )
}