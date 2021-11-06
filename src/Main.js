import React from "react";
import Header from "./Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login/Login";
import Menu from "./Menu/Menu";
import Logup from "./Logup/Logup";
import Store from './Store';
import StartScreen from "./StartScreen/StartScreen"

let Main = () => {
  return (
    <Store>
      <BrowserRouter>
          <Header />
          <Route exact path='/' component={StartScreen}/>
          <Route path="/login" component={Login} />
          <Route path="/logup" component={Logup}/>
          <Route path="/main" component={Menu} />
      </BrowserRouter>
    </Store>
  );
};

export default Main;
