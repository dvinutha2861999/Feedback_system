import React from 'react'


function ContactUs() {
  return (
   < >
    <div className="  container-fluid d-flex " style={{ backgroundImage: "url('./public/picture12.jpg')", width:"100%" }}>
  <div className=" container mt-5 w-50 mx-5 mb-5 ">
  <div className="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112061.09262729759!2d77.208022!3d28.632485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x644e33bc3def0667!2sIndior+Tours+Pvt+Ltd.!5e0!3m2!1sen!2sus!4v1527779731123"
      width="100%"
      height="500px"
    
     
     />
  </div>
</div>
    
     <form className="container w-50 mt-5 mx-5  border border-5 border border-secondary mb-5">
     <div className='text-center'><h1>Contact Us</h1></div>
  <div className="contact-form ">
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="fname">
        
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="fname"
          placeholder="Enter First Name"
          name="fname"
        />
      </div>
    </div>
    &nbsp;
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="lname">
        
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="lname"
          placeholder="Enter Last Name"
          name="lname"
        />
      </div>
    </div>
    &nbsp;
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="email">
        
      </label>
      <div className="col-sm-10">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
        />
      </div>
    </div>
    &nbsp;
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="comment">
      
      </label>
      <div className="col-sm-10">
        <textarea
          className="form-control"
          rows={5}
          id="comment"
          placeholder='Comment'
          defaultValue={""}
        />
      </div>
    </div>
    &nbsp;
    <div className="form-group">
      <div className="col-sm-offset-2 col-sm-10">
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </div>
    </div>
    &nbsp;
  </div>
</form>


    </div>


   </>
  )
}

export default ContactUs
