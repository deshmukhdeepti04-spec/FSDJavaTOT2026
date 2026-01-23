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
    pic:"https://kinsta.com/wp-content/uploads/2023/01/React-Web-Development.png",
    myname:"Deepti",
    doj:"1234",
    branch:"CSE-AIML",
    college:"ABESEC"
  },
  {
    pic:"https://www.simform.com/wp-content/uploads/2020/02/Why-use-react-1.2-preview.png",
    myname:"Deepti",
    doj:"1234",
    branch:"CSE-AIML",
    college:"ABESEC"
  },
  {
    pic:"https://kinsta.com/es/wp-content/uploads/sites/8/2023/06/install-react.jpg",
    myname:"Deepti",
    doj:"1234",
    branch:"CSE-AIML",
    college:"ABESEC"
  },
  {
    pic:"https://jonghan-park.github.io/assets/ReactImage.jpg",
    myname:"Deepti",
    doj:"1234",
    branch:"CSE-AIML",
    college:"ABESEC"
  },
  {
    pic:"https://www.interviewbit.com/blog/wp-content/uploads/2021/12/React-Projects.png",
    myname:"Deepti",
    doj:"1234",
    branch:"CSE-AIML",
    college:"ABESEC"
  },
]
  
    return (
    <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>Gallery
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