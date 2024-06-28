import React, { useState } from 'react';

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [error, setError] = useState("");

  const collectData = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    const data = {
      firstname,
      lastname,
      email,
      password,
      phonenumber,
    };

    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setConfirmpassword("");
    setPhonenumber("");
  };

  return (
    <div className="container-fluid d-flex" style={{ backgroundImage: "url('./public/picture12.jpg')" }}>
      <div className='container mt-5 w-50 mx-5 mb-5'>
        <img
          src="picture9.jpg"
          className="img-fluid"
          alt="Sample image"
          width="100%"
          height="600px"
        />
      </div>

      <form className="container mt-5 w-25 border border-5 border-secondary mx-5 mb-5 justify-content-center" onSubmit={collectData}>
        <div className='text-center'>
          <h1 className='mt-5'>Create An Account</h1>
        </div>
        &nbsp;
        {error && <div className="alert alert-danger">{error}</div>}
        &nbsp;
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="form-control"
              value={firstname} onChange={(e) => setFirstname(e.target.value)} required 
            />
          </div>
        </div>
        &nbsp;
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="form-control"
              value={lastname} onChange={(e) => setLastname(e.target.value)} required 
            />
          </div>
        </div>
        &nbsp;
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="form-control"
              name="email"
              value={email} onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        &nbsp;
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="password"
              id="inputPassword6"
              placeholder='Password'
              className="form-control"
              aria-describedby="passwordHelpInline"
              value={password} onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        &nbsp;
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="password"
              id="password"
              placeholder="Confirm Password"
              className="form-control"
              value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)}
              required
            />
          </div>
        </div>
        &nbsp;
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="text"
              id="phoneNumber"
              placeholder="Phone number"
              className="form-control"
              value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}
              required
            />
          </div>
        </div>
        &nbsp;
        <button className="btn btn-dark w-100 py-2" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default SignUp;
