import React, {useContext} from "react";
import s from "./Header.module.css";
import "./Toggle.css"
import {Context} from "../Store"
import {Link} from "react-router-dom"




const Header = () => {

  const [light, dispatch] = useContext(Context);
  let isLight = light.theme
  

  return (
    
    <div className={isLight ? s.header_main : s.header_main_dark}> 
      <Link to='/' className={s.Link}><h1 className={ isLight ? s.s_letter : s.s_letter_dark}>S</h1></Link>
      <Link to='/' className={s.Link}><h1 className={isLight ? s.todo_letters : s.todo_letters_dark}>TODO</h1></Link>
      <Link to="/login" className={isLight ? "bn3637 bn36": "bn3637_dark bn36_dark"}>Войти</Link>
      <div className={s.toggle}>
      <input onClick={() => dispatch({type: 'SET_THEME'})} type="checkbox" id="toggle" class="toggle--checkbox" />
      <label for="toggle" class="toggle--label">
        <span class="toggle--label-background"></span>
      </label>
      </div>  
    </div>
  );
};

export default Header;
