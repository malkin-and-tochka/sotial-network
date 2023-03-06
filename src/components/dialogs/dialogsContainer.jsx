import Dialogs from "./dialogs"
import { addMessage } from "../../redux/dialogs-reduce"
import { connect } from "react-redux"
import withAuthRedirect from "../../hoc/withAuthRedirect"
import { compose } from "redux"

let mapStateToProps =(state)=>{
  return{
    isAuth: state.authDataWrapper.isAuth,
    dialogState: state.dialogsDatawrapper
  }
}

export default compose(
  connect(mapStateToProps,{addMessage}),
  withAuthRedirect
)(Dialogs)
