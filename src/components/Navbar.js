import React, { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
    const { authState, logout } = useContext(AuthContext);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                BOOKRAHISI
            </Link>
            <ul className='navbar-menu'>
                <li className='navbar-item'>
                    <Link to='/' className='navbar-link'>Home</Link>
                </li>
                {authState.isAuthenticated ? (
                
                    <li className='navbar-item'>
                        <div className='profile-dropdown'>
                            <button onClick={toggleDropdown} className='navbar-link profile-button'>
                                <FaUserCircle size={24} />
                                <span className='profile-username'>{authState.user.username}</span>
                            </button>
                            {dropdownVisible && (
                                <div className='dropdown-menu'>
                                    <Link to='/profile' className='dropdown-item'>View Profile</Link>
                                    <button onClick={logout} className='dropdown-item'>Logout</button>
                                </div>
                            )}
                        </div>
                    </li>
                ) : (
                <>
                    <li className="navbar-item">
                    <Link to="/signup" className="navbar-link">Signup</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/login" className="navbar-link">Login</Link>
                    </li>
                    
                </>
                   
                )}
                

            </ul>
        </div>
    </nav>
  )
}

export default Navbar