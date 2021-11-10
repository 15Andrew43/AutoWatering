import React from 'react'

import { Link } from 'react-router-dom'

import Introduction from './Introduction'


const cards = [
    {id: 0, img: "0.png", text: "OASIS - небольшая частная компания, созданная более 5 лет назад, для улучшения качетсва жизни на загородном участке..."},
    {id: 1, img: "3.png", text: "Наша конманда состоит из опытных специалистов! Вот они справа надево Намджун Чонгук Чингачгук Гойко Митич Джин Юнги "},
    {id: 2, img: "2.jpeg", text: "Намждун работает в офисе"},
    {id: 3, img: "2.jpeg", text: "Чонгук копает картошку"},
    {id: 4, img: "2.jpeg", text: "Чингачгук делает замеры"},
]


export default function About() {
    return (
        <>
        <Introduction cards={cards}></Introduction>
        <p className="text">
            Всем успешным проектам мы обязаны сплаченной команде, в котороый каждый участник отлично разбирается в своей области.
        Примеры проектов можно посмотреть <Link to="/examples">тут</Link>.
        </p>
        </>
    )
}