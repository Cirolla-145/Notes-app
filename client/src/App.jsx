// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/siginPages/Login'
import Signup from './components/siginPages/Signup'
import Home from './components/Home/Home'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './components/context/AuthContext'

function App() {

  const {authUser} = useAuthContext()

  return (
    <>
        <div className="">
      <Routes>
      <Route path='/' element={authUser ? <Home/> : <Navigate to={"/login"} /> }/>
      <Route path='login' element={authUser ? <Navigate to='/'/> : <Login/>}/>
      <Route path='signup' element={authUser ? <Navigate to='/'/> : <Signup/> }/>

      </Routes>
      <Toaster/>
      </div>
  
    </>
  )
}

export default App
