import React,{useContext} from "react"
import { Formik, Field, Form } from "formik";
import s from "./Logup.module.scss"
import {Context} from "../Store"


const Logup = () =>{
    const [light, dispatch] = useContext(Context);
    let isLight = light.theme
    
    return(
        <div className={isLight ? s.bodt : s.bodt_dark}>
        <div className={ isLight ? s.login_wrap : s.login_wrap_dark}>
      <h1 className={ isLight ? s.login_h1 : s.login_h1_dark}>LogUp</h1>
      <h2 className={ isLight ? s.login_h2: s.login_h2_dark}>to</h2>
      <h1 className={ isLight ? s.s_letter : s.s_letter_dark}>S</h1>
      <h1 className={ isLight ? s.todo_letters : s.todo_letters_dark}>TODO</h1>

      <Formik
        initialValues={{
          Login: "",
          password: "",
          name: "",
          last_name:'',
          password_rep: ""

        }}
        //тут сделать реквест-респонс для авторизации
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
        <div className={s.input}>
            <label className={isLight ? s.input_label : s.input_label_dark} htmlFor="name">
              Name
            </label>
            <Field
              className={isLight? s.input_field : s.input_field_dark}
              id="name"
              name="name"
              placeholder=""
            />
          </div>
          <div className={s.input}>
            <label className={isLight ? s.input_label : s.input_label_dark} htmlFor="last_name">
              Last name
            </label>
            <Field
              className={isLight? s.input_field : s.input_field_dark}
              id="last_name"
              name="last_name"
              placeholder=""
            />
          </div>
          <div className={s.input}>
            <label className={isLight ? s.input_label : s.input_label_dark} htmlFor="Login">
              Login
            </label>
            <Field
              className={isLight? s.input_field : s.input_field_dark}
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
              className={isLight? s.input_field : s.input_field_dark}
              id="password"
              name="password"
              type='password'
              placeholder=""
            />
          </div>
          <div className={s.input}>
            <label className={isLight ? s.input_label : s.input_label_dark} htmlFor="password_rep">
              Password (repeat)
            </label>
            <Field
              className={isLight? s.input_field : s.input_field_dark}
              id="password_rep"
              name="password_rep"
              type='password_rep'
              placeholder=""
            />
          </div>
          <div className={s.action}>
            <button className={s.action_button} type="submit">Log Up</button>
          </div>
        </Form>
      </Formik>
    </div>
    </div>
    )
}

export default Logup