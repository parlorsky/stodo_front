import React, {useContext} from "react";
import {Context} from "../Store"
import s from "./StartScreen.module.css"

const StartScreen = () => {
  const [light, dispatch] = useContext(Context);
  let isLight = light.theme
  return (
    <div className={isLight ? s.bodt : s.bodt_dark}>
      <h1 className={ isLight ? s.login_h1 : s.login_h1_dark}>
        Добрый день, дорогой Друг.<br/> Этот сайт предназначен для <br/>удобного создания и
        обсуждения задач.
      </h1>
    </div>
  );
};

export default StartScreen;
