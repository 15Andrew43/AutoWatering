import React from 'react'

export default function Header() {
    return (
        <>
        <header className="header">
            <div> 
                <div className="adress">
                Украина, г. Ровно, улица Короленко, 1
                </div>
                <div className="maintext">
                    OASIS
                </div>
            </div>
            <div>
                <ul>
                    <li className="headertext0">
                        войти
                    </li>
                    <li className="headertext0">
                        зарегистрироваться
                    </li>
                </ul>
                <ul>
                    <li className="headertext1">
                        о нас
                    </li>
                    <li className="headertext1">
                        отзывы
                    </li>
                    <li className="headertext1">
                        сязаться
                    </li>
                </ul>
            </div>
        </header>
        </>
    )
}