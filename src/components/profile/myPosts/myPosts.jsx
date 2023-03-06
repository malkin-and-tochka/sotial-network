import Post from './post/post'

const MyPosts = (props) =>{
  let post = props.posts.map((p) => 
    <Post userName={p.name} id={p.id} post={p.post}/>
  )
  return(
    <ul>
      {post}
    </ul>
  )
}

export default MyPosts