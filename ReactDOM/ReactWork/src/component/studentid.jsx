
import "./studentid.css";

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
    <div className="id-card">
      {/* Header */}
      <div className="id-header">
        <div className="logo-box">
          <span className="logo"></span>
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
          <p><strong>Student ID number:</strong> {studentId}</p>
          <p><strong>Card number:</strong> {cardNumber}</p>
          <p><strong>Start date:</strong> {startDate}</p>

          <div className="role">{role}</div>

          <div className="barcode">|||| |||| ||| ||||</div>
        </div>

        <div className="photo">
          <img src={photo} alt="Student" />
        </div>
      </div>
    </div>
  );
}

export default StudentIDCard;
