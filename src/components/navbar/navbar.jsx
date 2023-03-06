import { NavLink } from 'react-router-dom';
import s from './navbar.module.css'


const Nav = () => {
  return (
    <div className={s.navWrapper}>
      <div className={s.nav}>
        <div className={s.navItem}>
          <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
        </div>
        <div className={s.navItem}>
          <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Message</NavLink>
        </div>
        <div className={s.navItem}>
          <NavLink to="/friends" className = { navData => navData.isActive ? s.active : s.item }>Friends</NavLink>
        </div>
        <div className={s.navItem}>
          <NavLink to="">News</NavLink>
        </div>
        <div className={s.navItem}>
          <NavLink to="">Music</NavLink>
        </div>
        <div className={s.navItem}>
          <NavLink to="">Settings</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav