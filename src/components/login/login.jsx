import LoginForm from "./loginForm.jsx/loginForm"
import style from './login.module.css'

const Login =(props) =>{
  return(
    <div className={style.wrapper}>
      <LoginForm/>
    </div>
  )
}

export default Login