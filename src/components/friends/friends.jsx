import style from './friends.module.css'
import FriendsItem from './friend/friendsItem'
import React from 'react'
import Preloader from '../../common/Preloader'
import Paginator from "./paginator/paginator";


let Friends = (props)=>{
  let friendsElement = props.usersDataWrapper.map((item) => 
    <FriendsItem key={item.id} unfollowThunk={props.unfollowThunk} followThunk={props.followThunk} toogleFollowingInProgress={props.toogleFollowingInProgress} followingInProgress={props.followingInProgress} item={item} setUsers={props.setUsers} unfollow={props.unfollow} follow={props.follow} followed={item.followed}/>
  )
  return(
    <div className={style.friendsWrapper}>
      {props.isFetching ? <Preloader/>: null }
      <div className={style.friends}> 
        {friendsElement}
      </div>
        <Paginator onPageCgange={props.onPageCgange} totalUsersCounter={props.totalUsersCounter} pageSize={props.pageSize} currentPage={props.currentPage}/>
    </div>
  )
}

export default Friends