import React from 'react'

import Header from './components/Header';
import StartPage from './components/StartPage'
import About from './components/About';
import Examples from './components/Examples';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';


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
                    <Route path="/examples" element={<Examples></Examples>}></Route>
                    <Route path="/singup" element={<SignUp></SignUp>}></Route>
                    <Route path="/signin" element={<SignIn></SignIn>}></Route>
                </Routes>
        </Router>
    </>
  )
}

export default App;
