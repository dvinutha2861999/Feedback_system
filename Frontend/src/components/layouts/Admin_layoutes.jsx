import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Admin_layoutes() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/admin/home')
      .then(response => setFeedbacks(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className='text-center' style={{ backgroundImage: "url('./public/picture12.jpg')" }}>
        <h1>Admin Dashboard</h1>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index) => (
              <tr key={feedback._id}>
                <td>{index + 1}</td>
                <td>{feedback.name}</td>
                <td>{feedback.phone}</td>
                <td>{feedback.email}</td>
                <td>{feedback.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin_layoutes;
