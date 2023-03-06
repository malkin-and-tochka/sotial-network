import s from './post.module.css'

const Post = (props) =>{

  return(
    <div className={s.post}>
      <span className={s.name}>{props.userName}</span> <br />
      {props.post}
    </div>
  )
}

export default Post