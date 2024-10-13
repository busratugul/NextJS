
import Post from './Post'
import classes from './PostsList.module.css'
import { useState, useEffect } from 'react'

function PostsList() {
  /* fetch("http://localhost:8080/posts").then(response.json()).then(data => setPost(data.posts)) Bu infinity loop oluşturur.Use effect bu yerde işe yarar. */
  const [posts, setPosts] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    async function fetchPost() {
      setIsFetching(true)
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json()
      if (!response.ok) {
        console.log('Veri Çekme Başarısız...')
      }
      setPosts(resData.posts)
      setIsFetching(false)
    }
    fetchPost()
  }, [])

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setPosts((prev) => [postData, ...prev])
  }

  return (
    <>
      {!isFetching && posts.length === 0 ? (
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
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {isFetching && (
        <div
          style={{
            textAlign: 'center',
            color: 'darkviolet',
            fontWeight: '600',
            fontSize: '15px',
          }}
        >
          Loading posts...
        </div>
      )}
    </>
  )
}

export default PostsList
