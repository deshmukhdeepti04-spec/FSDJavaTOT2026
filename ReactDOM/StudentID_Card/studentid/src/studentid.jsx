import React from "react";
import "./studentid.css";
import logo from './ABES_logo.png';
import barcode from './barcode.png';
// import photo from './deepti-photo.png';

function StudentIDCard({
  university,
  campuses,
  name,
  studentId,
  cardNumber,
  startDate,
  role,
  photo
}) {
  return (
    <div className="id-card" style={{border:'3px solid black',margin: '50px auto'}}>
      {/* Header */}
      <div className="id-header">
        <div className="logo-box">
          <span className="logo"><img src={logo} alt="" height={55} width={55}/></span>
        </div>
        <div>
          <h3>{university}</h3>
          <p>{campuses}</p>
        </div>
      </div>

      {/* Body */}
      <div className="id-body">
        <div className="details">
          <h2>{name}</h2>
          <p><strong>Faculty ID number:</strong> {studentId}</p>
          <p><strong>Aadhar number:</strong> {cardNumber}</p>
          <p><strong>Start date:</strong> {startDate}</p>

          <div className="role">{role}</div>
            <br></br>
          <div className="barcode"><img src={barcode}  alt = "" height={55} width={185}/></div>
        </div>

        <div className="photo">
          <img src={photo} alt = "" />
        </div>
      </div>
    </div>
  );
}

export default StudentIDCard;
