import { Form, Formik, Field } from "formik";
import * as yup from 'yup'
import style from './loginForm.module.css'
import { login } from "../../../redux/auth-reduce";
import {connect} from 'react-redux'
import { Navigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = (props) => {
  if(props.isAuth){
    return <Navigate to={'/profile/'}/>
  }

  const validationSchema = yup.object().shape({
    login:yup.string().typeError('Должно быть сообщение!').required('Обязятельное поле!'),
    email:yup.string().typeError('Должно быть сообщение!').required('Обязятельное поле!'),
    password:yup.string().typeError('Должно быть сообщение!').required('Обязятельное поле!')
  })

  const submit = (values, { setSubmitting, setStatus }) => {  // вторым параметром добавляем  setStatus
    props.login(values.email, values.password, values.rememberMe, setStatus);  // и сюда  setStatus - (это метод фотмика)
    setSubmitting(true);
  };

  return(
      <Formik
            initialValues={{ login: '', password: '', email:'' }}
            validationSchema={validationSchema}
            onSubmit={submit}
          >
            {({ isSubmitting, handleBlur, status, errors, touched }) => (
              <Form className={style.form}>
                {status}
                <Field onBlur={handleBlur} type="login" name="login" placeholder='login' className={!(errors.login && touched.login) ? style.textarea : style.error}/>
                {errors.login && touched.login && <p className={style.textError}>{errors.login}</p>}
                <Field type="email" name="email" placeholder='email' className={!(errors.email && touched.email) ? style.textarea : style.error}/>
                {errors.email && touched.email && <p className={style.textError}>{errors.email}</p>}
                <Field type="password" name="password" placeholder='password' className={!(errors.password && touched.password) ? style.textarea : style.error}/>
                {errors.password && touched.password && <p className={style.textError}>{errors.password}</p>}
                <button type="submit" disabled={isSubmitting}>
                  Remember me
                </button>
              </Form>
            )}
          </Formik>

  )
}

const mapStateToProps =(state)=>({
  isAuth:state.authDataWrapper.isAuth
})

export default connect(mapStateToProps,{login})(LoginForm)