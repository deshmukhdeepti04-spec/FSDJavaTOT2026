import React from 'react'
import './profile.css';

function Profile({data}) {
  return (
    <div>
        {/* <h2> Profiles Page</h2>
        <h3>Name:{props.name}</h3>
        <h3>DoJ:{props.doj} </h3>
        <h3>Branch:{props.branch}</h3>
        <h3>College:{props.college}</h3> */}
        <h2> Profiles Page</h2>
        <img src={data.pic} height={200} width={400} style={{ borderRadius: "50%", width: "200px", height: "200px" }} />
        <h3>Name:{data.myname}</h3>
        <h3>DoJ:{data.doj} </h3>
        <h3>Branch:{data.branch}</h3>
        <h3>College:{data.college}</h3>
    </div>
  )
}

export default Profile