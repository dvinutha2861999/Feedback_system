import React from 'react'

function About() {
  return (
    <div className="px-4 py-5 my-5 text-center" style={{ backgroundImage: "url('./public/picture12.jpg')" }}>

      <h1 className="display-5 fw-bold text-body-emphasis ">About Us</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Everything we do is guided by our fundamental principles of integrity, excellence, and teamwork. Our commitment to openness, truthfulness, and responsibility in all of our dealings guarantees that our clients get the best possible assistance and service.
        </p>


      </div>
      <div className='main'>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">

            <h3 className="fs-2 text-body-emphasis">Agile Digital Workforce</h3>
            <p>
              Zidio Development believes that teamwork, ongoing education, and adapting to the always changing digital scene are powerful forces.
            </p>

          </div>
          <div className="feature col">

            <h3 className="fs-2 text-body-emphasis">Superiority in engineering</h3>
            <p>
              from innovative smartphone apps to bespoke software. Our commitment lies in striving for superior engineering and expanding the frontiers of technology.

            </p>

          </div>
          <div className="feature col">

            <h3 className="fs-2 text-body-emphasis">Responsive</h3>
            <p>
              Zidio development is very receptive to user input. We constantly hear what our customers have to say and modify our features and design to suit.

            </p>

          </div>
        </div>
      </div>
      <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img
        src="picture5.jpg"
        className="d-block mx-lg-auto img-fluid"
        alt="Bootstrap Themes"
        width={700}
        height={500}
        loading="lazy"
      />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
       Specialities
      </h1>
      <p className="lead">
      Software development, Data Science,Web development ,Android development, Frontend development,Full stacks,Internship
      </p>
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
       Join Us Now
      </h1>
      
    
    </div>
  </div>
</div>

      <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
   
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
       Programs
      </h1>
      <p className="lead">
      MentorShip Program,Online Training Course,LeaderShip Development Workshops,Certification Opportunities .
      </p>
     
      
    
    </div>
    <div className="col-10 col-sm-8 col-lg-6">
      <img
        src="picture6.jpg"
        className="d-block mx-lg-auto img-fluid"
        alt="Bootstrap Themes"
        width={800}
        height={500}
        loading="lazy"
      />
    </div>
  </div>
</div>

      
        </div>


  
  
  
  )
}

export default About
