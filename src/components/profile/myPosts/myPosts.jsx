import Post from './post/post'

const MyPosts = (props) =>{
  let post = props.posts.map((p) => 
    <Post key={p.id} userName={p.name} id={p.id} post={p.post}/>
  )
  return(
    <ul>
      {post}
    </ul>
  )
}

export default MyPosts