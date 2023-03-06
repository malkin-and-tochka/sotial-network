import style from './friendsItem.module.css'
import userPhoto from '../../../assets/img/testUser.png'
import { NavLink } from 'react-router-dom'

const FriendsItem = (props) =>{
  return(
    <div className={style.friendsItemWrapper}>
      <div className={style.row}>
        <div className={style.avatarSircle}>
          <NavLink to={'/profile/' + props.item.id}>
            <img src={props.item.photos.small != null ? props.item.photos.small : userPhoto} alt="" />
          </NavLink>
        </div>
        <div className={style.userName}>
          {props.item.name}
        </div>
        <div className={style.location}>
        </div>
        <div className={style.status}>
          {props.item.status}
        </div>
        <div>
          {
            props.followed ?
            <button disabled={props.followingInProgress.some(id => id === props.item.id)} className={style.button} onClick={()=>{
              props.unfollowThunk(props.item.id)
            }}>unfollow
            </button>
             :
            <button disabled={props.followingInProgress.some(id => id === props.item.id)} className={style.button} onClick={()=>{
              props.followThunk(props.item.id)
              }}>follow
            </button>
            
          }
        </div>
      </div>
    </div>
  )
}

export default FriendsItem