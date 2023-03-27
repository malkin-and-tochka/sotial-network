import { addPost, setUserProfile, getUsersData, getStatus, updateStatus, saveAvatarPhoto, saveProfile } from '../../redux/profile-reduce'
import Profile from './profile'
import {connect} from 'react-redux'
import React from 'react'
import {useLocation,useNavigate,useParams} from "react-router-dom";
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component{
    refreshUser(){
        let userId = this.props.router.params.userId;
        if(!userId){
            userId = this.props.authorizedUserId
        }
        this.props.getUsersData(userId)
        this.props.getStatus(userId)
    }
  componentDidMount(){
        this.refreshUser()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
      if(prevProps.router.params.userId !== this.props.router.params.userId){
          this.refreshUser()
      }
  }


    render(){
    return(
      <Profile {...this.props} isOwner={!this.props.router.params.userId} profile={this.props.profileState} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
  }
}


let mapStateToProps = (state) =>{
  return{
    postsState: state.ProfileDataWrapper,
    profileState: state.ProfileDataWrapper.profile,
    status: state.ProfileDataWrapper.status,
    isAuth: state.authDataWrapper.isAuth,
    authorizedUserId: state.authDataWrapper.userId
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

export default   
compose(
  connect(mapStateToProps,{addPost, setUserProfile, getUsersData, getStatus, updateStatus, saveAvatarPhoto, saveProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)