import s from './header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props)=> {
  return (
    <header className={s.header}>
      {props.isAuth ? <div>{props.login} <button onClick={props.logout}>logout</button></div> : <NavLink to={'/login'}>login</NavLink>}
    </header>
  );
}

export default Header