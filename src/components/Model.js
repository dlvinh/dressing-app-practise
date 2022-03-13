import React from 'react'
import { StyleBikiniBottom, StyleBikiniTop, StyledHair, StyleNecklace, StyleHandback,StyleFeet,StyleBackground } from './StyledModel'

export default function Model() {
  return (

    <React.Fragment>
         <div className="contain">
            <div className="body" />
            <div className="model" />
            {/* <div className="hairstyle" style={{ background: 'url("./assets/images/hairstyle/hairstyle3.png")'}} /> */}
            <StyledHair className='hairstyle' styledBackground={"./assets/images/hairstyle/hairstyle3.png"}></StyledHair>
            <StyleNecklace className='necklace' styledBackground={"./assets/images/necklaces/necklace3.png"}></StyleNecklace>
            <StyleBikiniTop className='bikinitop' styledBackground={"./assets/images/clothes/topcloth5.png"}></StyleBikiniTop>
            <StyleBikiniBottom className='bikinibottom' styledBackground={"./assets/images/clothes/botcloth4.png"}></StyleBikiniBottom>
            <StyleHandback className='handbag' styledBackground={"./assets/images/handbags/handbag2.png"}></StyleHandback>
            <StyleFeet className='feet' styledBackground="./assets/images/shoes/shoes2.png"></StyleFeet>
            <StyleBackground className='background' styledBackground='./assets/images/background/background1.jpg'></StyleBackground>
            {/* <div classN ame="necklace" style={{ width: 500, height: 1000, background: 'url("./assets/images/necklaces/necklace3.png")', position: 'absolute', bottom: '-40%', right: '-3.5%', transform: 'scale(0.5)', zIndex: 4 }} /> */}
            


            {/* <div className="bikinitop" style={{ width: 500, height: 500, background: 'url("./assets/images/clothes/topcloth5.png")', position: 'absolute', top: '-9%', left: '-5%', zIndex: 3, transform: 'scale(0.5)' }} />
            <div className="bikinibottom" style={{ width: 500, height: 1000, background: 'url("./assets/images/clothes/botcloth4.png")', position: 'absolute', top: '-30%', left: '-5%', zIndex: 2, transform: 'scale(0.5)' }} />
            <div className="handbag" style={{ width: 500, height: 1000, background: 'url("./assets/images/handbags/handbag2.png")', position: 'absolute', bottom: '-40%', right: '-3.5%', transform: 'scale(0.5)', zIndex: 4 }} />
            <div className="feet" style={{ width: 500, height: 1000, background: 'url("./assets/images/shoes/shoes2.png")', position: 'absolute', bottom: '-37%', right: '-3.5%', transform: 'scale(0.5)', zIndex: 1 }} />
            <div className="background" style={{ backgroundImage: 'url("./assets/images/background/background1.jpg")' }} /> */}
          </div>
    </React.Fragment>
  )
}
