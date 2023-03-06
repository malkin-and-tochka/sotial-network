import Header from "./header"
import React from "react"
import { connect } from "react-redux"
import {authMe, logout} from '../../redux/auth-reduce'

class HeaderContainer extends React.Component {
  render(){
    return(
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state)=>({
    login:state.authDataWrapper.login,
    isAuth:state.authDataWrapper.isAuth
})

export default connect(mapStateToProps,{logout})(HeaderContainer)