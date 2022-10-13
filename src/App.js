import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'
import Create from './pages/create/Create'

//components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

//Styles
import './App.css'

function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <Sidebar />
        <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/project' element={<Project />}></Route>
          <Route path='/create' element={<Create />}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
