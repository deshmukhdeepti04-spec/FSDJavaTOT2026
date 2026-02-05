// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
 //import viteLogo from '/vite.svg'
// import './App.css'
// import Profile from './component/Profile'
// import Gallery from './component/Gallery'
// import StateHandlingHook from './component/StateHandlingHook'
// import ImageManipulation from './component/ImageManipulation'
// import UseEffectWork from './component/UseEffectWork'

// function App() {
//   const [count, setCount] = useState(0)

//   //logic part
//   return (
//     <>
//       <div className='container' >
//       <h2 style={{color:'white',backgroundColor:'brown'}}> Welcome to React App development</h2>
//       <h3>Information Technology</h3>
//       {/* <Profile /> */}
//       {/* <Gallery /> */}
//       {/* <StateHandlingHook /> */}
//       {/* <ImageManipulation /> */}
//       <UseEffectWork/>
//     </div>
//     </>
//   )
// }

// export default App

 
import studentid from "./studentid";

function App() {
  return (
    <StudentIDCard
      university="University of Nottingham"
      campuses="UK | CHINA | MALAYSIA"
      name="ZHANG"
      studentId="2021XXXX"
      cardNumber="2011XXXX"
      startDate="Sep 2019"
      role="Student"
      photo="https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
    />
  );
}

export default App;

