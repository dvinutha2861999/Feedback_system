import React, { useState } from "react";
import './Feature.css'
import { HiClock } from 'react-icons/hi';
function Feature() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const collectData = async (e)=>{
    e.preventDefault();
    
    try{
    const response = await fetch('http://localhost:4000/',{
      method:'post',
      body: JSON.stringify({name,phone,email,feedback}),
      headers:{
        'Content-Type':'application/json'
      },
    });
    const result=await response.json();
    console.log(result);
  }catch(error){
    console.error(error);
  }
  setName("");
  setPhone("");
  setEmail("");
  setFeedback("");
  }
  return (
   <>
     <div className=""style={{ backgroundImage: "url('./public/picture12.jpg')" }}>
      <h1 className="text-center pt-0 pb-1">Zidio Development</h1>
      <h3 className="text-center pb-1">Feedback Form </h3>
      <div className="row justify-content-center">
      <div className="form-box ">
        <div className="textup">
          <div className="ic">
          <HiClock/>
          </div>
          It only takes few minutes!!
        </div>
        <hr />
        <form onSubmit={collectData}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e)=> setName(e.target.value) } required  />
            <label htmlFor="phone" className="form-label">
              Phone No
            </label>
            <input type="text" className="form-control" id="phone" 
            value={phone} onChange={(e)=> setPhone(e.target.value) }
            required />

            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email} onChange={(e)=> setEmail(e.target.value) }
              required
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Are you satisfied with our service ?
            </label>
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                No
              </label>
            </div>
            <br />
            <label htmlFor="feedback" className="form-label">
              Feedback
            </label>
            <textarea className="form-control fb" aria-label="feedback" value={feedback} onChange={(e)=> setFeedback(e.target.value) } ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      </div>
    </div>
   </>
  )
}

export default Feature
