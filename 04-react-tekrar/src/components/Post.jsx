import classes from './Post.module.css'

function Post({ author, body }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.author}>{body}</p>
    </li>
  )
}

export default Post