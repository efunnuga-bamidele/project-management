import { Link } from 'react-router-dom'

//Hooks
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

//Style & Images
import './Navbar.css'
import Workplace from '../assets/workplace.svg'

export default function Navbar() {
    const { logout, isPending } = useLogout()
    const { user, authIsReady } = useAuthContext()
    return(
        <div className='navbar'>
            <ul>
                <li className='logo'>
                    <Link to='/' >
                        <img src={Workplace} alt="dojo logo" />
                        <span>The Workplace</span>
                    </Link>
                </li>
                {!user && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
                    )}
                {user && 
                    <li>
                        {!isPending && <button className='btn' onClick={logout}>Logout</button>}
                        {isPending && <button className='btn' disabled>Logging out...</button>}
                    </li>
                }
            </ul>
        </div>
    )
}