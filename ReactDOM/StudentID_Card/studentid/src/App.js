import StudentIDCard from "./studentid.jsx";
import deeptiphoto from './Photo04.jpg';

function App() {
  return (
    <StudentIDCard
      university="ABESEC University"
      campuses=" GHAZIABAD | UTTAR PRADESH | INDIA"
      name="DEEPTI DESHMUKH"
      studentId="03354"
      cardNumber="8557 4204 4540"
      startDate="22nd Feb 2025"
      role="Faculty"
      photo={deeptiphoto}
    />
  );
}

export default App;
