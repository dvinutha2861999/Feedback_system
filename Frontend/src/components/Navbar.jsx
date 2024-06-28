import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (<div  style={{ width:"100%"}}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16 " mx-5>
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
</svg>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" width="40" height="40" >
          <NavLink className="nav-link active" aria-current="page" to='/'>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/about'>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/contact'>
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/login'>
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/logout'>
            Logout
          </NavLink>
        </li>
       
        
       
        <li className="nav-item">
          <NavLink className="nav-link" to='/admin'>
            Admin
          </NavLink>
        </li>

      </ul>
    
       

    </div>
  </div>
</nav>
</div>

  )
}

export default Navbar
