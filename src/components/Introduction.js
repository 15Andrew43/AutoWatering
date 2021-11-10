import React from 'react'

import PrintCards from './PrintCards'


export default function Introduction(props) {
    return (
        <div className="Pep">
            <PrintCards cards={props.cards}></PrintCards>
        </div>
    )
}