import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Store";
import { Link } from "react-router-dom";
import "./Menu.css";
import s from "./Menu.module.scss";
import Popup from "../Popup/Popup";
import { Formik, Field, Form, resetForm } from "formik";

const Menu = () => {
  let [store, dispatch] = useContext(Context);
  let [isActive, setActive] = useState(false);
  let [isEditing, setEditing] = useState(false);
  let todo_Info = store.todo;
  let isLight = store.theme;
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = new Date(yyyy, mm - 1, dd);

  useEffect(() => {
    console.log(todo_Info)
    
  }, [store]);

  function deadliner(date) {
    let dl = date.split(".");
    dl = dl[2] + "-" + dl[1] + "-" + dl[0];
    let parts = dl.match(/(\d+)/g);
    let date_of_dead = new Date(parts[0], parts[1] - 1, parts[2]);
    let deadline =
      (date_of_dead.getTime() - today.getTime()) / (1000 * 3600 * 24) 
    let deadline_str;
      if(deadline.toString().slice(-1) == '1'){
        deadline_str =  deadline + ' день'
      } 
      else if (deadline.toString().slice(-1) == '2' || deadline.toString().slice(-1) == '3'||deadline.toString().slice(-1) == '4'){
        deadline_str = deadline + ' дня'
      } else if(deadline.toString().slice(-1) == '5' || deadline.toString().slice(-1) == '6' || deadline.toString().slice(-1) == '7' || deadline.toString().slice(-1) == '8' || deadline.toString().slice(-1) == '9' || deadline.toString().slice(-1) == '0'){
        deadline_str = deadline + ' дней'
      } 
      let percent
      let per_st
      let alert
      let alert_dark
      console.log(deadline)
      if(deadline == 0){
        percent = '100%'
        per_st = s.timeout
        alert = [s.todo_body, s.alert].join(' ')
        alert_dark = [s.todo_body_dark, s.alert].join(' ')
      }else if(deadline <=8){
        percent = '80%'
        per_st = s.eighty
        alert = [s.todo_body, s.alert].join(' ')
        alert_dark = [s.todo_body_dark, s.alert].join(' ')
      }  else if(deadline <=16){
        percent = '70%'
        per_st = s.sevnty
        alert = s.todo_body
        alert_dark = s.todo_body_dark
      }  else if(deadline <=27){
        percent = '60%'
        per_st = s.sixty
        alert = s.todo_body
        alert_dark = s.todo_body_dark
      }  else if(deadline <=40){
        percent = '50%'
        per_st = s.fifty
        alert = s.todo_body
        alert_dark = s.todo_body_dark
      }  else if(deadline <=68){
        percent = '40%'
        per_st = s.fourty
        alert = s.todo_body
        alert_dark = s.todo_body_dark
      }  else if(deadline <=91){
        percent = '30%'
        per_st = s.thirty
        alert = s.todo_body
        alert_dark = s.todo_body_dark
      }  else if(deadline <=130){
        percent = '20%'
        per_st = s.twenty
        alert = s.todo_body
        alert_dark = s.todo_body_dark
      }  else if(deadline <=170){
        percent = '10%'
        per_st = s.ten
        alert = s.todo_body
        alert_dark = s.todo_body_dark
      }  else if(deadline <=280){
        percent = '0%'
        per_st = s.zero
        alert = s.todo_body
        alert_dark = s.todo_body_dark
      }  else if(deadline <=3){
        percent = '90%'
        per_st = s.ninty
        alert = [s.todo_body, s.alert].join(' ')
        alert_dark = [s.todo_body_dark, s.alert].join(' ')
      } 
      else{
        alert = s.todo_body
        alert_dark = s.todo_body_dark
      }
      let response = {deadline: deadline_str,
      per_st: per_st,
      percent: percent,
      alert: alert,
      alert_dark: alert_dark
    }
    //можно создать функцию а в ретурн передавать объект
    return  response
  }
  return (
    <div className={isLight ? s.bodt : s.bodt_dark}>
      <Link
        to="/user"
        className={isLight ? "buttons bn36" : "buttons_dark bn36_dark"}
      >
        User
      </Link>
      <Link
        to="/settings"
        className={isLight ? "buttons bn36" : "buttons_dark bn36_dark"}
      >
        Settings
      </Link>
      <Link
        to="/"
        className={isLight ? "buttons bn36" : "buttons_dark bn36_dark"}
      >
        About
      </Link>
      <h1 className={isLight ? s.login_h1 : s.login_h1_dark}>Rooms</h1>
      <div className={s.tasks_container}>
        <button
          onClick={() => setActive(!isActive)}
          className={isLight ? s.button : s.button_dark}
        >
          <p className={isLight ? s.login_p1 : s.login_p1_dark}>
            Create <br /> task
          </p>
        </button>

        {todo_Info ? todo_Info.map((todo) => (
          <div className={isLight ? deadliner(todo.deadline).alert : deadliner(todo.deadline).alert_dark}>
            <h1 className={isLight ? s.todo_name : s.todo_name_dark}>
              {todo.name.length > 11  ? todo.name.slice(0, 10) + "...": todo.name}
            </h1>
            <button
              className={isLight ? s.edit_button : s.edit_button_dark}
              onClick={() => setEditing(true)
              }
            >
              E
            </button>
            <button
              className={isLight ? s.delete_button : s.delete_button_dark}
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.name })
              }
            >
              X
            </button>
            <p
              className={isLight ? s.todo_description : s.todo_description_dark}
            >
              Описание: <br />
              {todo.description}
            </p>
            <p className={isLight ? s.todo_members : s.todo_members_dark}>
              Кол-во участников: {todo.members}
            </p>
            <p className={isLight ? s.todo_deadline : s.todo_deadline_dark}>
              Дедлайн через: {deadliner(todo.deadline).deadline}
            </p>
            <div className={isLight ? s.arrow : s.arrow_dark}>
              <div className={[s.arrow_status, deadliner(todo.deadline).per_st].join(' ')}>
                {deadliner(todo.deadline).percent}
              </div>
            </div>
            <Popup isActive={isEditing} setActive={setEditing}>
        <Formik
          initialValues={{
            description: todo.description,
            name: todo.name,
            members: todo.members,
            deadline: todo.deadline,
            id: todo.id
          }}

          onSubmit={async (values, { resetForm }) => {
            await new Promise(() => {
              const data = values;
              dispatch({ type: "EDIT_TODO", payload: data});
            });
            resetForm();
          }}
        >
          <Form >
            <div className={s.input}>
              <label
                className={isLight ? s.input_label : s.input_label_dark}
                htmlFor="name"
              >
                Name
              </label>
              <Field
                className={isLight ? s.input_field : s.input_field_dark}
                id="name"
                name="name"
                placeholder=""
              />
            </div>
            <div className={s.input}>
              <label
                className={isLight ? s.input_label : s.input_label_dark}
                htmlFor="description"
              >
                Description
              </label>
              <Field
                className={isLight ? s.input_field : s.input_field_dark}
                id="description"
                name="description"
                placeholder=""
              />
            </div>
            <div className={s.input}>
              <label
                className={isLight ? s.input_label : s.input_label_dark}
                htmlFor="members"
              >
                Members(amount)
              </label>
              <Field
                className={isLight ? s.input_field : s.input_field_dark}
                id="members"
                name="members"
                placeholder=""
              />
            </div>
            <div className={s.input}>
              <label
                className={isLight ? s.input_label : s.input_label_dark}
                htmlFor="deadline"
              >
                Deadline
              </label>
              <Field
                className={isLight ? s.input_field : s.input_field_dark}
                id="deadline"
                name="deadline"
                placeholder=""
              />
            </div>
            <div className={s.action}>
              <button className={s.action_button} type="submit">
                Edit
              </button>
              <button
                onClick={() => setEditing(!isEditing)}
                className={s.action_button}
                
              >
                Close
              </button>
            </div>
          </Form>
        </Formik>
      </Popup>
          </div>
        )) : ''}
      </div>
      <Popup isActive={isActive} setActive={setActive}>
        <Formik
          initialValues={{
            description: "",
            name: "",
            members: "",
            deadline: "",
            id: ''
          }}
          onSubmit={async (values, { resetForm }) => {
            await new Promise(() => {
              const data = values;
              dispatch({ type: "SET_TODO", payload: data });
            });
            resetForm();
          }}
        >
          <Form >
            <div className={s.input}>
              <label
                className={isLight ? s.input_label : s.input_label_dark}
                htmlFor="name"
              >
                Name
              </label>
              <Field
                className={isLight ? s.input_field : s.input_field_dark}
                id="name"
                name="name"
                placeholder=""
              />
            </div>
            <div className={s.input}>
              <label
                className={isLight ? s.input_label : s.input_label_dark}
                htmlFor="description"
              >
                Description
              </label>
              <Field
                className={isLight ? s.input_field : s.input_field_dark}
                id="description"
                name="description"
                placeholder=""
              />
            </div>
            <div className={s.input}>
              <label
                className={isLight ? s.input_label : s.input_label_dark}
                htmlFor="members"
              >
                Members(amount)
              </label>
              <Field
                className={isLight ? s.input_field : s.input_field_dark}
                id="members"
                name="members"
                placeholder=""
              />
            </div>
            <div className={s.input}>
              <label
                className={isLight ? s.input_label : s.input_label_dark}
                htmlFor="deadline"
              >
                Deadline
              </label>
              <Field
                className={isLight ? s.input_field : s.input_field_dark}
                id="deadline"
                name="deadline"
                placeholder=""
              />
            </div>
            <div className={s.input}>
              <label
                className={isLight ? s.input_label : s.input_label_dark}
                htmlFor="id"
              >
                Id: 
              </label>
              <Field
                className={isLight ? s.input_field : s.input_field_dark}
                id="id"
                name="id"
                placeholder=""
              />
            </div>
            <div className={s.action}>
              <button className={s.action_button} type="submit">
                Create
              </button>
              <button
                onClick={() => setActive(!isActive)}
                className={s.action_button}
                type="reset"
              >
                Закрыть
              </button>
            </div>
          </Form>
        </Formik>
      </Popup>
    </div>
  );
};

export default Menu;
