import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>
      <h1>Chai aur React and Contet API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
