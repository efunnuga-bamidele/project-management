import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'

//Styles
import './App.css'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/project' element={<Project />}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App
