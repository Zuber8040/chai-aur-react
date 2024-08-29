import React from 'react'
import {useDispatch} from 'react-redux'
import authSerice from '../../appwrite/auth'
import {logout} from '../../store/authSlice'


function LogoutBtn() {
  const dispaatch = useDispatch();

  const logoutHandler = ()=>{
    authSerice.logout().then(()=>{
      dispaatch(logout())
    })

  }
  
  return (
    <button onClick={logoutHandler} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutBtn