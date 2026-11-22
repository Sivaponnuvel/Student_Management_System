import { useState } from 'react'
import Home from './pages/Home'
import Register from './pages/Register'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import StudentRegister from './pages/StudentRegister'
import Login from './pages/Login'
import TeacherRegister from './pages/TeacherRegister'


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/student/register' element={<StudentRegister />}/>
        <Route path='/teacher/register' element={<TeacherRegister />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
