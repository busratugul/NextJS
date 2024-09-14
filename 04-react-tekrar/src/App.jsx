import PostsList from './components/PostsList'
import classes from './App.module.css'

function App() {
  return (
    <>
      <h1 className={classes.header}> My Twitter Pano </h1>
      <PostsList />
    </>
  )
}

export default App
