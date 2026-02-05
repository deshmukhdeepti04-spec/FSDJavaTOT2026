import {useState} from 'react'
// import{ useState } from React;

function Registration({regData}) {
const [name,setName]=useState();
const [email,setEmail]=useState();
const [password,setPassword]=useState();

function captureData(e){
  e.preventDefault();
  // alert("Hiii....");
// alert(name + email + password)
// if(name==""){
//   return;
// }

const mydata={
  name,
  email,
  password
}
regData(mydata)
}




  return (
    <div>Registration

        <form>
            <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" onChange={(e)=>setName(e.target.value)}class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {/* {name} */}
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)}class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {/* {email} */}
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)}class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  {/* {password} */}
  </div>
  
  <button type="submit" onClick={captureData} class="btn btn-primary">Registration</button>
</form>

    </div>
  )
}

export default Registration