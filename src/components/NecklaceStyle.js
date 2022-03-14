import React, { useEffect, useMemo, useRef } from 'react'
// import { StyleBikiniBottom, StyleBikiniTop, StyledHair, StyleNecklace, StyleHandback, StyleFeet, StyleBackground } from './StyledModel'
import { useSelector } from 'react-redux';
import {  animated, useTransition } from 'react-spring';

export default function NecklaceStyle() {
    const necklace = useSelector(state => state.modelStateReducer.necklace);
    const transitionStyleNecklaceProps = useTransition(necklace,{
        from:{
            left: "-85%",
            opacity: "0.5",
            transform: "translateX(0%) scale(0.5)",
            backgroundImage: `url("${necklace}")`,
            //backgroundColor: "red"
        },
        enter:{
            backgroundImage: `url("${necklace}")`,
            transform: "translateX(73.35%) scale(0.5)",
            opacity: "1",
            // backgroundColor: "red"
        },
        leave:{
            opacity: "0",
            transform: "translateX(40%) scale(0.5)",
        },
        config:{
            duration: 600
        }
    })
    const renderNecklaceStyle = ()=>{
        return transitionStyleNecklaceProps((propsAni, item)=>{
            return <animated.div className="necklace" style={propsAni} >
            </animated.div>
        })
    }
  return (
    <React.Fragment>
        {renderNecklaceStyle()}
    </React.Fragment>
  )
}
