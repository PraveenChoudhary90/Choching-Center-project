
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import TeacherRagistraction from './Pages/TeacherRegistraction'
import TeacherLogin from './Pages/TeacherLogin'
import Search from './Pages/Search'

function App() {
  

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>} >
    <Route index element={<Home/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='registraction' element={<TeacherRagistraction/>}/>
    <Route path='login' element={<TeacherLogin/>}/>
    <Route path='search' element={<Search/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
