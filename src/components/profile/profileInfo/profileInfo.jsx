import React, {useEffect, useState} from "react";
import style from './profileInfo.module.css'
import usersAvatar from '../../../assets/img/testUser.png'
import ProfileDataForm from "./profileDataForm/profileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setAditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        if (!status) {
            setStatus(props.status)
        }
    }, [props.status])

    const activateEditMode = () => {
        setAditMode(true)
    }
    const deactivateEditMode = () => {
        setAditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    const selectAvatarPhoto = (e) => {
        if (e.target.files.length)
            props.props.saveAvatarPhoto(e.target.files[0])
    }
    return (
        <div className={!editMode ? style.profile : style.profileEditMode}>
            <div className={style.top}>
                <div className={style.row}>
                    <div className={style.userIconWrapper}>
                        <img src={props.profile.photos.large || usersAvatar} className={style.userIcon}/>
                    </div>
                    <div className={style.userInfo}>
                        <div className={style.topInfo}>
                            <div className={style.userName}>
                                {props.props.profile.fullName}
                            </div>
                            {props.props.isOwner &&
                                <button onClick={activateEditMode} className={style.moreInfo}>
                                    Change<span>></span>
                                </button>
                            }

                        </div>
                        <div className={style.bottomInfo}>
                            <div className={style.aboutMe}>
                                Status:<br/>
                                {
                                    editMode &&
                                    <div>
                                        <input autoFocus={true} onChange={onStatusChange}
                                               value={status}/>
                                        <div>
                                            <input type="file" onChange={selectAvatarPhoto}/>
                                        </div>
                                    </div>
                                }
                                {
                                    !editMode &&
                                    <div>
                                        {props.status}
                                    </div>
                                }
                                {
                                    !editMode &&
                                    <div>
                                        Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}
                                    </div>
                                }

                                {
                                    props.profile.aboutMe &&
                                    <div>
                                        About me: {props.profile.aboutMe}
                                    </div>
                                }
                                {editMode ? <ProfileDataForm deactivateEditMode={deactivateEditMode}
                                                             saveProfile={props.saveProfile}
                                                             profile={props.profile}/> :
                                    <ProfileData profile={props.profile}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactTitle}: {contactValue}
        </div>
    )
}
const ProfileData = (props) => {
    return (
        <div>
            {
                !Object.keys(props.profile.contacts).lenght ?
                    <div>
                        Contacts:<br/>
                        {Object.keys(props.profile.contacts).filter(key => props.profile.contacts[key]).map(key => {
                            return (
                                <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                            )
                        })}
                    </div> : ""
            }
        </div>
    )
}
export default ProfileInfo