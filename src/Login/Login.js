import React, {useContext} from "react";
import s from "./Login.module.scss";
import { Formik, Field, Form } from "formik";
import {Context} from "../Store"
import {Link} from "react-router-dom"
import {Route, Redirect} from "react-router"

const Login = () => {
  const [light, dispatch] = useContext(Context);
  let isLight = light.theme
  

  return (
      <div className={isLight ? s.bodt : s.bodt_dark}>
    <div className={ isLight ? s.login_wrap : s.login_wrap_dark}>
      <h1 className={ isLight ? s.login_h1 : s.login_h1_dark}>Log In</h1>
      <h2 className={ isLight ? s.login_h2: s.login_h2_dark}>to</h2>
      <h1 className={ isLight ? s.s_letter : s.s_letter_dark}>S</h1>
      <h1 className={ isLight ? s.todo_letters : s.todo_letters_dark}>TODO</h1>

      <Formik
        initialValues={{
          Login: "",
          password: "",
        }}
        //тут сделать реквест-респонс для авторизации
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));

        }}
      >
        <Form>
          <div className={s.input}>
            <label className={isLight ? s.input_label : s.input_label_dark} htmlFor="Login">
              Login
            </label>
            <Field
              className={isLight ? s.input_field:s.input_field_dark}
              id="Login"
              name="Login"
              placeholder=""
            />
          </div>
          <div className={s.input}>
            <label className={isLight ? s.input_label : s.input_label_dark} htmlFor="password">
              Password
            </label>
            <Field
              className={isLight ? s.input_field:s.input_field_dark}
              id="password"
              name="password"
              type='password'
              placeholder=""
            />
          </div>
          <div className={s.action}>
        {/* <button className={s.action_button} type="submit">Log in</button> */}
        <Link to='/main' className={s.action_button} type="submit">Log In</Link>
          </div>
        </Form>
      </Formik>
     
          <div className={s.action1}>
            <Link to='/logup' className={s.action_button1} type="submit">Sign Up</Link>
          </div>
    </div>
    </div>
  );
};

export default Login;
