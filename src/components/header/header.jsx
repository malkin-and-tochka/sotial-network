import style from './header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props)=> {
  return (
    <header className={style.header}>
      {props.isAuth ? <div className={style.topWrapper}><span className={style.userName}>{props.login}</span><button onClick={props.logout}  className={style.logout}>Logout</button></div> : <div className={style.topWrapperLogin}><NavLink className={style.logIn} to={'/login'}>login</NavLink></div> }
    </header>
  );
}

export default Header