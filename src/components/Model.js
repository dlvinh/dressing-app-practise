import React, { useRef } from 'react'
// import { StyleBikiniBottom, StyleBikiniTop, StyledHair, StyleNecklace, StyleHandback, StyleFeet, StyleBackground } from './StyledModel'
import { useSelector } from 'react-redux';
export default function Model() {
  const { hairstyle, necklace, bikinitop, bikinibottom, handbag, feet, background } = useSelector(state => state.modelStateReducer);

  const styleHairStyle = {width: "1000px",
  height: "1000px",
  background: `url("${hairstyle}")`,
  position: "absolute",
  top: "-75%",
  right: "-57%",
  transform: "scale(0.15)",
  zIndex: "4"}

  const styleNecklace = {
    width: "500px",
height: "1000px",
background: `url("${necklace}")`,
position: "absolute",
bottom: "-40%",
right: "-3.5%",
transform: "scale(0.5)",
zIndex: "4"
  }

  const styleBikiniTop = {
    width: "500px",
height: "500px",
background: `url("${bikinitop}")`,
position: "absolute",
top: "-9%",
left: "-5%",
zIndex: "3",
transform: "scale(0.5)"
  }

  const styleBikiniBottom ={
    width: "500px",
height: "1000px",
background: `url("${bikinibottom}")`,
position: "absolute",
top: "-30%",
left: "-5%",
zIndex: "2",
transform: "scale(0.5)"
  }

  const styleHandbag ={
    width: "500px",
height: "1000px",
background: `url("${handbag}")`,
position: "absolute",
bottom: "-40%",
right: "-3.5%",
transform: "scale(0.5)",
zIndex: "4"
  }

  const styleFeet ={
    width: "500px",
height: "1000px",
background: `url("${feet}")`,
position: "absolute",
bottom: "-37%",
right: "-3.5%",
transform: "scale(0.5)",
zIndex: "1"
  }

  const styleBackground = {
    backgroundImage: `url("${background}")`
  }


  // console.log(ref1.current.getBoundingClientRect());
  return (
    <React.Fragment>
      <div className="contain">
        <div className="body" />
        <div className="model" />
        {/* <StyledHair className='hairstyle' styledBackground={hairstyle}></StyledHair>
        <StyleNecklace className='necklace' styledBackground={necklace}></StyleNecklace>
        <StyleBikiniTop className='bikinitop' styledBackground={bikinitop}></StyleBikiniTop>
        <StyleBikiniBottom className='bikinibottom' styledBackground={bikinibottom}></StyleBikiniBottom>
        <StyleHandback className='handbag' styledBackground={handbag}></StyleHandback>
        <StyleFeet className='feet' styledBackground={feet}></StyleFeet>
        <StyleBackground className='background' styledBackground={background}></StyleBackground> */}
        <div className="necklace"  style={styleNecklace}/>
        <div className="hairstyle" style={styleHairStyle} />
        <div className="bikinitop"  style={bikinitop ===""? {}:styleBikiniTop}/>
        <div className="bikinibottom" style={bikinibottom ===""? {}:styleBikiniBottom}/>
        <div className="handbag" style={styleHandbag} />
        <div className="feet"  style={styleFeet} />
        <div className="background" style={styleBackground}/>
      </div>
    </React.Fragment>
  )
}
