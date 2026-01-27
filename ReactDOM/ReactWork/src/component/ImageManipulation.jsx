import React ,{useState}from 'react'
import cat from './cat2.png'

function ImageManipulation() {
const [height,setHeight]=useState(300);
const [width,setWidth]=useState(300);
const [red,setRed]=useState(0);
const [green,setGreen]=useState(0);
const [blue,setBlue]=useState(0);
const [rotate,setRotate]=useState(30);

function IncreaseHeight(){
    setHeight(height+30);

}
function IncreaseWidth(){
    setWidth(width+30);

}
function changeBGColor(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);
}
function setImageAngle(){
    setRotate(rotate+30);
}

  return (
    <div>ImageManipulation

        <div style={{ backgroundColor:`rgb(${red},${green},${blue})` ,border:'3px solid black' ,height:'300px', width:'300px', marginLeft:'400px', paddingTop:'50px', paddingLeft:'50px'}}>
          <img src={cat} height ={height} width={width} style={{transform:`rotate(${rotate}deg)`}}/>
        </div>
        <div style={{margin:'50px', marginBottom:'30px',marginLeft:'360px'}}>
        <button onClick={IncreaseHeight}>IncreaseHeight</button>
        <button onClick={IncreaseWidth}>IncreaseWidth</button>
        <button onClick={changeBGColor}>Change BG Color</button>
        <button onClick={setImageAngle}>Image Rotate</button>


        </div>
    </div>
  )
}

export default ImageManipulation