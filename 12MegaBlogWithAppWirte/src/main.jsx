import { StrictMode } from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { BrowserRouter ,createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import { AuthLayout } from './components/index.js'
import Login from './Pages/Login.jsx'
import Test  from './Pages/Test.jsx'

import SignUp from './Pages/SignUp.jsx'
import AllPosts from './Pages/AllPosts.jsx'
import AddPost from './Pages/AddPost.jsx'
import EditPost from './Pages/EditPost.jsx'
import Post from './Pages/Post.jsx'


const router  = createBrowserRouter([
  {
    path : '/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/login',
        element:(
          <>
            <Test/>
          </>
        )
      },
    //   {
    //     path: "/login",
    //     element: (
    //         <AuthLayout authentication={false}>
    //             <Login />
    //         </AuthLayout>
    //     ),
    // },
    {
        path: "/signup",
        element: (
            <AuthLayout authentication={false}>
                <SignUp/>
            </AuthLayout>
        ),
    },
    {
        path: "/all-posts",
        element: (
            <AuthLayout authentication>
                {" "}
                <AllPosts />
            </AuthLayout>
        ),
    },
    {
        path: "/add-post",
        element: (
            <AuthLayout authentication>
                {" "}
                <AddPost />
            </AuthLayout>
        ),
    },
    {
        path: "/edit-post/:slug",
        element: (
            <AuthLayout authentication>
                {" "}
                <EditPost />
            </AuthLayout>
        ),
    },
    {
        path: "/post/:slug",
        element: <Post />,
    },
    ],
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>

  <Provider store={store}>
      <App/>
  </Provider>

  </BrowserRouter>
</StrictMode>,

)
