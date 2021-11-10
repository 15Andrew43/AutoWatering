import React from 'react'

import {Link} from "react-router-dom";

export default function Header() {
    return (
        <>
        <header className="header">
            <div> 
                <div className="adress">
                Украина, г. Ровно, улица Короленко, 1
                </div>
                <Link className="maintext" to="/">OASIS</Link>
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
                        <Link to="/about">о нас</Link>
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