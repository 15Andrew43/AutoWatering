import React from 'react'
import Header from './htmlparts/Header';
import Introduction from './htmlparts/Introduction';


// import {
//     BrowserRouter as Router,
//     Route,
//     Switch
//   } from "react-router-dom";



function App() {
    const cards = [
        {id: 0, img: "0.png", text: "OASIS - небольшая частная компания, созданная более 5 лет назад, для улучшения качетсва жизни на загородном участке..."},
        {id: 1, img: "3.png", text: "Наша конманда состоит из опытных специалистов! Вот они справа надево Намджун Чонгук Чингачгук Гойко Митич Джин Юнги "}
    ]

  return (
    <>
    {/* <Route> */}
		<Header></Header>
        
        <div className="name">
            <div className="name-right">авотматический полив</div>
            <div className="name-center">и</div>
            <div className="name-left">ландшафтный дизайн</div>
        </div>

        <Introduction cards={cards}></Introduction>
    {/* </Route> */}
    </>
  )
}

export default App;
