import PostsList from './components/PostsList'
import MainHeader from './components/MainHeader'
import { useState } from 'react'

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true)

  function hideModalHandler() {
    setModalIsVisible(false)
  }

  function showModalHandler() {
    setModalIsVisible(true)
  }

  return (
    <>
      <MainHeader createPost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          hideModal={hideModalHandler}
        />
      </main>
    </>
  )
}

export default App
