import Sms from './sms/sms'
import s from './dialogMasseges.module.css'
import React from 'react'
import MessagesForm from './messagesForm/messagesForm'

const Masseges = (props) => {
  
  let masseges = props.sms.messagesData.map((m) => <Sms id={m.id} message={m.message}/>)

  // let addMessage = () => {
  //   props.addMessage()
  // }

  // let onMessageChange =(e)=>{
  //   let text = e.target.value
  //   props.onMessageChange(text)
  // }

  return(
    <div className={s.wrapper}>
      <div className={s.top}>
        {masseges}
      </div>
        <MessagesForm {...props}/>
    </div>
  )  
}

export default Masseges