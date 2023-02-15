import './App.css';
import { useState } from 'react';
import SocialCard from './components/SocialCards/SocialCard';
import data from './dummy.json'
function App() {

  const [dark, setDark] = useState(true)

  const styleTitleDark = {
    color:"white",
  }
  const styleTitleLight = {
    color :"hsl(230, 17%, 14%)"
  }
  const stylefollowersDark = {
    color:"hsl(228, 34%, 66%)",
  }
  const stylefollowerslight = {
    color:" hsl(228, 12%, 44%)",
    fontWeight:700
  }

  const toggleCircleStyle = {
    backgroundColor: 'hsl(230, 17%, 14%)',
    width: '16px',
    height: '16px',
    position: 'absolute', 
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '50%',
  }
  
  const toggleCircleStyle2 = {
    backgroundColor: 'white',
    width: '16px',
    height: '16px',
    position: 'absolute', 
    top: '50%',
    right:'6%',
    transform: 'translateY(-50%)',
    borderRadius: '50%',
  }

  const toggleParaDark = {
    background: 'linear-gradient( hsl(210, 78%, 56%), hsl(146, 68%, 55%) )'

  }
  const toggleParalight = {
    background: 'hsl(230, 22%, 74%)'

  }
 if(dark) {
  document.body.style.backgroundColor = 'hsl(230, 17%, 14%)'
 }else {
  document.body.style.backgroundColor = 'white'
 }
  

  return (
    <div className="container">
      <div className="title-container">
      <p className="title" style={dark ?styleTitleDark : styleTitleLight}>Social Media Dashboard</p>
      <p className="total-followers" style={dark ?stylefollowersDark : stylefollowerslight}>Total Followers: 23,004</p>
      </div>

      <hr />

      <div className="dark-container">
        <p className="dark-title total-followers" style={stylefollowersDark}>Dark Mode</p>
        <p className="toggle-para" onClick={() => setDark(!dark)} style={dark ? toggleParaDark : toggleParalight}><span className="toggle-circle" style={dark ?toggleCircleStyle : toggleCircleStyle2}></span></p>
      </div>

      {/* <SocialCard icon="./images/icon-facebook.svg" username="@nathanf" year="1987" background={'hsl(228, 28%, 20%)'} color="hsl(208, 92%, 53%)" comment="12 Today" typeOfFan="FOLLOWERS" isUp={true}/> */}
      <div className="big-card-container">
      {
        data.map(card => (
          <SocialCard icon={card.img} username={card.username} year={card.year}  color={card.color} comment={card.comment}
          isUp={card.isUp} typeOfFan={card.typeOfFan} dark={dark}  />
        ))
      }
      </div>
      

    </div>
  );
}

export default App;
