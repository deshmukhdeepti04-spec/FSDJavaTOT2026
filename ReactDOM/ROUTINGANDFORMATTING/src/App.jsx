import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './assets/component/Login'
import Dashboard from './assets/component/Dashboard'
import Home from './assets/component/Home'
import Registration from './assets/component/Registration'
import 'bootstrap/dist/css/bootstrap.min.css';
import{ BrowserRouter, data, Route, Routes } from 'react-router-dom';
function App() {
  // const [count, setCount] = useState(0)
  const [data,rdata]=useState();

  return (
    <>
      {/* <h2>welcome to form handling and Routing</h2>
      <Login />
      <Dashboard />
      <Home />
      <Registration /> */}

  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/dashboard' element={<Dashboard />}/>
  <Route path='/login' element={<Login logdata={data} />}/>
  <Route path='/register' element={<Registration regData={rdata} />}/>

  

  </Routes>
  </BrowserRouter>
  {JSON.stringify(data)}
    </>
  )
}

export default App
