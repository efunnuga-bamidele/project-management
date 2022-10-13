import { Link } from 'react-router-dom'

//Style & Images
import './Navbar.css'
import Workplace from '../assets/workplace.svg'

export default function Navbar() {
    return(
        <div className='navbar'>
            <ul>
                <li className='logo'>
                    <Link to='/' >
                        <img src={Workplace} alt="dojo logo" />
                        <span>The Workplace</span>
                    </Link>
                </li>

                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li>
                    <button className='btn'>Logout</button>
                </li>
            </ul>
        </div>
    )
}