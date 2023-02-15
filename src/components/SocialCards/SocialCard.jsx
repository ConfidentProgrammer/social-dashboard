import React, { useState } from 'react'
import './SocialCard.css'
function SocialCard({icon, year, comment, color, username , dark, background, typeOfFan, isUp}) {
 const [dark2, setDark2] = useState(dark)
 
    const userStyleDark = {
        color: 'hsl(228, 34%, 66%)'
    }
    const userStylelight = {
        color:"hsl(228, 12%, 44%)",
        fontWeight:"700"
    }
    const yearStyleDark = {
        color: 'white'
    }
    const yearStyleLight = {
        color :"hsl(230, 17%, 14%)"
    }
    const followStyleDark = {
        color: 'hsl(228, 34%, 66%)'
    }
    const green = {
        color:"hsl(163, 72%, 41%)",
        fontWeight:"700"
    }
    const red = {
        color: 'hsl(356, 69%, 56%)',
        fontWeight:"700"
    }
    const backDark = {
        backgroundColor:"hsl(228, 28%, 20%)"
    }
    const backLight = {
        backgroundColor:"hsl(227, 47%, 96%)"
    }
  return (
    <div className='card-container' style={dark ? backDark : backLight}>
         <span className='side' style={{background:color}}></span>
        <div className="img-user-container">
           
            <span className="icon"><img src={icon} alt="" /></span>
            &nbsp;&nbsp;&nbsp;
            <span className="username" style={dark ? userStyleDark : userStylelight}>{username}</span>
        </div>

        <p className="year" style={dark ? yearStyleDark : yearStyleLight}>{year}</p>
        <p className="followers" style={followStyleDark}>{typeOfFan}</p>
        <p className="comment" style={isUp ? green : red }>{comment}</p>

    </div>
  )
}

export default SocialCard