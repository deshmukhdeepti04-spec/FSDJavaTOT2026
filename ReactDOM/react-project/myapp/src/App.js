import { useState } from "react";

function App() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    mobile: "",
    course: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      student.name === "" ||
      student.email === "" ||
      student.mobile === "" ||
      student.course === ""
    ) {
      alert("All fields are required");
      return;
    }

    setSubmittedData(student);
    setStudent({ name: "", email: "", mobile: "", course: "" });
  };

  return (
    <div className='container' >
      <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={student.mobile}
          onChange={handleChange}
        />
        <br /><br />

        <select
          name="course"
          value={student.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option>React JS</option>
          <option>Python</option>
          <option>Java</option>
          <option>Data Science</option>
        </select>
        <br /><br />

        <button type="submit">Register</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Registered Student</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Mobile: {submittedData.mobile}</p>
          <p>Course: {submittedData.course}</p>
        </div>
      )}
    </div>
      </div>
  );
}

export default App;
