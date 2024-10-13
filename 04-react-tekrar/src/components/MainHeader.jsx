import { Link } from 'react-router-dom'
import classes from './MainHeader.module.css'
import { MdPostAdd, MdMessage } from 'react-icons/md'

function MainHeader({ createPost }) {
  return (
    <header>
      <h1>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to='/create-post' className={classes.button} onClick={createPost}>
          <MdPostAdd size={18} /> New Post
        </Link>
      </p>
    </header>
  )
}

export default MainHeader
