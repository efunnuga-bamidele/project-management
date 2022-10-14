import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Hiik
import { useAuthContext } from './hooks/useAuthContext'

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
  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
          <BrowserRouter>
          {user && <Sidebar />}
            <div className='container'>
            <Navbar />
            <Routes>
              <Route path='/' element={user ? <Dashboard /> : <Navigate to='/login' />}></Route>
              <Route path='/project' element={user ? <Project /> : <Navigate to='/login' />}></Route>
              <Route path='/create' element={user ? <Create /> : <Navigate to='/login' />}></Route>
              <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />}></Route>
              <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />}></Route>
            </Routes>
            </div>
          </BrowserRouter>
      )}
    </div>
  );
}

export default App
