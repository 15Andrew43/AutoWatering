import React from 'react'


import Introduction from './Introduction'


const cards = [
    {id: 0, img: "0.png", text: "OASIS - небольшая частная компания, созданная более 5 лет назад, для улучшения качетсва жизни на загородном участке..."},
    {id: 1, img: "3.png", text: "Наша конманда состоит из опытных специалистов! Вот они справа надево Намджун Чонгук Чингачгук Гойко Митич Джин Юнги "}
]



export default function StartPage() {
    return (
        <>
        <img className="startimg" src="img/1.jpeg" alt=""></img>
        <div className="name">
            <div className="name-right">авотматический полив</div>
            <div className="name-center">и</div>
            <div className="name-left">ландшафтный дизайн</div>
        </div>

        <Introduction cards={cards}></Introduction>
        </>
    )
}