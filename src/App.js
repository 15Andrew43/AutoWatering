import React from 'react'

import Header from './htmlparts/Header';
import StartPage from './htmlparts/StartPage'
import About from './htmlparts/About';


import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";



function App() {

  return (
    <>
        <Router>
                <Header></Header>
                <Routes>
                    <Route exact path="/" element={<StartPage></StartPage>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                </Routes>
        </Router>
    </>
  )
}

export default App;
