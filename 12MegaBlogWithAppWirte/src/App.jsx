import { useEffect, useState } from 'react'
import {useDispatch} from  'react-redux' 
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import Header from './components/header/Header'
import Footer from './components/Footer/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import SignUp from './Pages/SignUp.jsx'
import AllPosts from './Pages/AllPosts.jsx'
import AddPost from './Pages/AddPost.jsx'
import EditPost from './Pages/EditPost.jsx'
import Post from './Pages/Post.jsx'
import Test from './Pages/Test.jsx'
import { AuthLayout } from './components/index.js'
import Login from './Pages/Login.jsx'

function App() {

  const [loading,setLoading ] = useState(true);
  const dispatch = useDispatch()
  
  useEffect(() => {

    authService.getCurrentUser()
    .then((userData)=>{
        if (userData) {
            dispatch(login({userData}));
        }
        else{
          dispatch(logout())
        }
      }
    )
    .finally(()=>{
      setLoading(false)
    })
  
  }, [])
  

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
       
        
        <main>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* 
            <Route
              path="/login"
              element={
                <AuthLayout authentication={false}>
                  <Login />
                </AuthLayout>
              }
            /> 
            */}
            <Route
              path="/signup"
              element={
                <AuthLayout authentication={false}>
                  <SignUp />
                </AuthLayout>
              }
            />
            <Route
              path="/all-posts"
              element={
                <AuthLayout authentication>
                  <AllPosts />
                </AuthLayout>
              }
            />
            <Route
              path="/add-post"
              element={
                <AuthLayout authentication>
                  <AddPost />
                </AuthLayout>
              }
            />
            <Route
              path="/edit-post/:slug"
              element={
                <AuthLayout authentication>
                  <EditPost />
                </AuthLayout>
              }
            />
            <Route path="/post/:slug" element={<Post />} />
          </Routes>        
          
        </main>
        <Footer/>
      </div>
    </div>
    
  ) : null 

}

export default App
