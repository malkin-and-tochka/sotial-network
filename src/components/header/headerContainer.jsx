import Header from "./header"
import React from "react"
import { connect } from "react-redux"
import {logout} from '../../redux/auth-reduce'

class HeaderContainer extends React.Component {
    render(){
    return(
      <Header profile={this.props.profileState} {...this.props}/>
    )
  }
}

const mapStateToProps = (state)=>({
    login:state.authDataWrapper.login,
    isAuth:state.authDataWrapper.isAuth,
})


export default connect(mapStateToProps,{logout})(HeaderContainer)