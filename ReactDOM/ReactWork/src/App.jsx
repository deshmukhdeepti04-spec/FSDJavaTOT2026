import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile'
import Gallery from './component/Gallery'
// import StateHandlingHook from './component/StateHandlingHook'

function App() {
  // const [count, setCount] = useState(0)

  //logic part
  return (
    <>
      <div className='container' >
      <h2 style={{color:'white',backgroundColor:'brown'}}> Welcome to React App development</h2>
      <h3>Information Technology</h3>
      {/* <Profile /> */}
      <Gallery />
      {/* <StateHandlingHook /> */}
    </div>
    </>
  )
}

export default App
