import React from 'react'


export default function SignUp() {

    return (
        <>
        <div className="registration">
            <ul className="registration-text">
                <li>логин</li>
                <li>пароль</li>
            </ul>
            <div className="registration-answer">
                <form>
                    <input>
                    </input>
                    <input>
                    </input>
                </form>
                <button type="submit">войти</button>
            </div>
        </div>
        </>
    )
}