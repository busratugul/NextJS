import NewPost from './NewPost'
import Post from './Post'
import classes from './PostsList.module.css'
import Modal from './Modal'
import { useState } from 'react'

function PostsList({ isPosting, hideModal }) {
  const [posts, setPosts] = useState([])

  function addPostHandler(postData) {
    setPosts((prev) => [postData, ...prev])
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={hideModal}>
          <NewPost onCancel={hideModal} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            color: 'darkviolet',
            fontWeight: '600',
            fontSize: '15px',
          }}
        >
          There are no post yet.
          <br /> Start adding some!
        </div>
      ) : (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.author} />
          ))}
        </ul>
      )}
    </>
  )
}

export default PostsList
