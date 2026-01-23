import React from 'react'
import Profile from './Profile'

function Gallery() {
  const student=[{
    pic:"https://tse4.mm.bing.net/th/id/OIP.6l9rCElYlP9EoG0A-iXULgHaDA?pid=Api&P=0&h=180",
    myname:"Deepti",
    doj:"1234",
    branch:"CSE-AIML",
    college:"ABESEC"
  },
  {
    pic:"https://tse4.mm.bing.net/th/id/OIP.6l9rCElYlP9EoG0A-iXULgHaDA?pid=Api&P=0&h=180",
    myname:"Deepti",
    doj:"1234",
    branch:"CSE-AIML",
    college:"ABESEC"
  },
  {
    pic:"https://tse4.mm.bing.net/th/id/OIP.6l9rCElYlP9EoG0A-iXULgHaDA?pid=Api&P=0&h=180",
    myname:"Deepti",
    doj:"1234",
    branch:"CSE-AIML",
    college:"ABESEC"
  },
  {
    pic:"https://tse4.mm.bing.net/th/id/OIP.6l9rCElYlP9EoG0A-iXULgHaDA?pid=Api&P=0&h=180",
    myname:"Deepti",
    doj:"1234",
    branch:"CSE-AIML",
    college:"ABESEC"
  },
  {
    pic:"https://tse4.mm.bing.net/th/id/OIP.6l9rCElYlP9EoG0A-iXULgHaDA?pid=Api&P=0&h=180",
    myname:"Deepti",
    doj:"1234",
    branch:"CSE-AIML",
    college:"ABESEC"
  },
  {
    pic:"https://tse4.mm.bing.net/th/id/OIP.6l9rCElYlP9EoG0A-iXULgHaDA?pid=Api&P=0&h=180",
    myname:"Deepti",
    doj:"1234",
    branch:"CSE-AIML",
    college:"ABESEC"
  },
]
  
    return (
    <div>Gallery
        {/* <Profile name='Deepti'doj='1234'branch='CSE-AIML'college='ABESEC'/>
        <Profile name='Anamika'doj='2345'branch='CSE-AIML'college='ABESEC'/>
        <Profile name='Shivani'doj='3456'branch='CSE-AIML'college='ABESEC' /> */
        }
        {/* <Profile data={student} /> */}

        {
            student.map((ele)=>(<Profile data={ele} />))
        }
    
    </div>
  )
}

export default Gallery