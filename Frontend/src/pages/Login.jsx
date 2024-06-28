import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    navigate('/feedback'); 
  };

  return (
    <>
      <div className="container-fluid d-flex" style={{ backgroundImage: "url('./public/picture12.jpg')" }}>
        <div className="container mt-5 w-50 mx-5 mb-5">
          <img src="picture9.jpg" className="img-fluid" alt="Sample" width="100%" height="500px" />
        </div>

        <form className="container w-25 mt-5 mb-5 border border-5 border-secondary" onSubmit={handleSubmit}>
          <div className="text-center">
            <h1 className='mt-5'>Login Form</h1>
          </div>
          &nbsp;

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          &nbsp;

          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          &nbsp;

          <div className="form-check text-start my-3 text-light">
            <input className="form-check-input" type="checkbox" defaultValue="remember-me" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          &nbsp;

          <button className="btn btn-dark w-100 py-2" type="submit">
            Login
          </button>

          <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?</p>
          &nbsp;

          <Link to="/signup">
            <button className="btn btn-dark w-100 py-2" type="button">
              Signup
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
