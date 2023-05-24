import React, { useState } from "react";

const Form = () => {
  const [feedback, setFeedback] = useState([]);
  const [name, setName] = useState(" ");
  const [department, setDepartment] = useState(" ");
  const [rating, setRate] = useState(" ");

  const subMit = (e) => {
    e.preventDefault();
    const newFeedback = {
      name: name,
      department: department,
      rating: rating,
    };

    setFeedback([...feedback, newFeedback]);
    setName(" ");
    setDepartment(" ");
    setRate(" ");
  };

  return (
    <div className="feedback-form">
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <form action="" onSubmit={subMit}>
        <div className="label-box">
          <label htmlFor="">Name </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="label-box">
          <label htmlFor="">Department </label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <div className="label-box">
          <label htmlFor="">Rating </label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="feedback">
        {feedback.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {feedback.map((fb, ind) => (
                <tr key={ind}>
                  <td>{fb.name}</td>
                  <td>{fb.department}</td>
                  <td>{fb.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No feedback</p>
        )}
      </div>
    </div>
  );
};

export default Form;
