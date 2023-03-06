import { NavLink } from 'react-router-dom'
import s from './dialogItem.module.css'

const DialogItem = (props) =>{
  return(
    <div className={s.dialogWrapper__item}>
      <NavLink to={'/dialogs/' + props.id} className={s.row}>

        <div className={s.avatarSircle}>
          
        </div>
        <div className={s.userName}>
          {props.userName}
        </div>

      </NavLink>
    </div>
  )
}

export default DialogItem