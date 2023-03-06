import MyPosts from './myPosts/myPosts'
import ProfileInfo from './profileInfo/profileInfo'
import style from './profile.module.css'
import React from 'react'
import Preloader from '../../common/Preloader'
import ProfilePostFormMemo from './profilePostForm/profilePostForm'

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={style.profileWrapper}>
            <ProfileInfo updateStatus={props.updateStatus} status={props.status} props={props}/>
            <ProfilePostFormMemo {...props}/>
            <MyPosts posts={props.postsState.postsData}/>
        </div>
    );
}

export default Profile 