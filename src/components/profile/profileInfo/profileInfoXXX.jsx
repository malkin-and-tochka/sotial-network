import React from "react";
import style from './profileInfo.module.css'

class ProfileInfoXXX extends React.Component{
  state = {
    editMode:false,
    status:this.props.status
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.status !== prevState.status){
      this.setState({
        status:this.props.status
      })
    }
  }
  activateEditMode = () =>{
    this.setState({
      editMode:true
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode:false
    })
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e) =>{
    this.setState({
      status:e.currentTarget.value
    })
    debugger
  }

  render(){
    return(
      <div className={style.profile}>
        <div className={style.top}>
          <div className={style.row}>

            <div className={style.userIconWrapper}>
              <img src={this.props.props.profile.photos.large} className={style.userIcon}/>
            </div>

            <div className={style.userInfo}>
              <div className={style.topInfo}>
                <div className={style.userName}>
                  {this.props.props.profile.fullName}
                </div>


                <button onClick={this.activateEditMode} className={style.moreInfo}>
                  change
                  <span>
                    >
                  </span>
                </button>


              </div>
              <div className={style.bottomInfo}>


                <div className={style.aboutMe}>
                  About me:<br />
                  {this.state.editMode &&
                   <div>
                    <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status}/>
                  </div>}
                  {!this.state.editMode &&
                   <div>
                    <span>{this.props.status}</span>
                  </div>}
                </div>


                <div className={style.location}>
                </div>
                <div className={style.studyPlace}>
                  place of study:<br /> bsu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileInfoXXX