import style from './sms.module.css'

const Sms = (props) =>{
  return(
    <div className={style.smsWrapper}>
      {props.message} 
    </div>
  )
}

export default Sms