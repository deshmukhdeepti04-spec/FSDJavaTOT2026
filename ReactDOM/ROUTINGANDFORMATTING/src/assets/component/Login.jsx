import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


function Login({logdata}) {
  // function captureLogData(){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate();
    function dataMatch(e){
      e.preventDefault();
       console.log(logdata)

      if(logdata.email==email){
        // alert("success")
        if(logdata.password==password){
            //  alert("Login Success");
            Navigate('/dashboard');
        }
        else{
          alert("Verify Password");
        }
      }else{
          alert("Failed")
      }
      // if(logdata.email==email){
      //   alert("Login Success");
      //   // 
      //   // alert(email+password);
      //   // console.log(logdata)
      //   //navigate('/dashboared')
      // }
      // else{
      //     alert("Login failed");
      // }
    // }
  }
  
  return (
    <div>Login
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)}class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={dataMatch} class="btn btn-primary">Login</button>
</form>


    </div>
  )
}

export default Login