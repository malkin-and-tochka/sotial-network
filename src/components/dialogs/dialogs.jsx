import s from './dialogs.module.css'
import DialogItem from './dialogItem/dialogItem'
import Messages from './Messages/dialogMasseges'
import { Navigate } from 'react-router-dom'

const Dialogs = (props) =>{

  if(!props.isAuth){
    return <Navigate  to={'/login'}/>
  }
  
  let dialogsElement = props.dialogState.dialogsData.map((d) => 
  <DialogItem userName={d.name} id={d.id}/>
  )
  
  return(
    <div className={s.dialogs}>
      <div className={s.dialogWrapper}>
        {dialogsElement}
      </div>
      <div className={s.massegeWrapper}>
        <Messages onMessageChange={props.onMessageChange} addMessage={props.addMessage} dialogState={props.dialogState} sms={props.dialogState} />
      </div>
    </div>
  )
}

export default Dialogs