import React, {useEffect, useState} from "react";
import style from './profileInfo.module.css'

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


    return (
        <div className={style.profile}>
            <div className={style.top}>
                <div className={style.row}>

                    <div className={style.userIconWrapper}>
                        <img src={props.props.profile.photos.large} className={style.userIcon}/>
                    </div>

                    <div className={style.userInfo}>
                        <div className={style.topInfo}>
                            <div className={style.userName}>
                                {props.props.profile.fullName}
                            </div>


                            <button onClick={activateEditMode} className={style.moreInfo}>
                                change
                                <span>
                                  >
                                </span>
                            </button>


                        </div>
                        <div className={style.bottomInfo}>


                            <div className={style.aboutMe}>
                                About me:<br/>
                                {editMode &&
                                    <div>
                                        <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode}
                                               value={status}/>
                                    </div>}
                                {!editMode &&
                                    <div>
                                        <span>{props.status}</span>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo