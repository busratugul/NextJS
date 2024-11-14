import { createRoot } from 'react-dom/client'
import Posts, { loader as postsLoader} from './routes/Posts.jsx'
import NewPost from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Posts />,loader: () => {}, children: [
        { path: '/create-post', element: <NewPost /> }
      ] }, //our main
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
