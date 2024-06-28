import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const handleSubmit = async (e, email, password, navigate) => {
  e.preventDefault();
  if (email === 'vinutha2003@gmail.com' && password === '1234') {
    navigate('/admin/home');
  } else {
    alert('Invalid credentials');
  }
};

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid d-flex h-40" style={{ backgroundImage: "url('./public/picture12.jpg')" }}>
        <form
          className="container w-50 mt-5 mb-5 border border-5 border-secondary"
          onSubmit={(e) => handleSubmit(e, email, password, navigate)}
        >
          <div className="text-center">
            <h1 className="mt-5">Login Form</h1>
          </div>
          <h1 className="h3 mb-3 fw-normal"></h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          &nbsp;
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          &nbsp;
          <button className="btn btn-dark w-100 py-2" type="submit">
            Login
          </button>
          &nbsp;
        </form>
      </div>
    </>
  );
}
