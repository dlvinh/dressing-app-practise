import React from 'react'
import { useSelector } from 'react-redux';
import { animated, useTransition } from 'react-spring';
export default function Handbag() {
    const handBag = useSelector(state => state.modelStateReducer.handbag);
    const transitionStyleHandbagProps = useTransition(handBag,{
        from:{
            left: "-85%",
            opacity: "0.5",
            transform: "translateX(0%) scale(0.5)",
            backgroundImage: `url("${handBag}")`,
        },
        enter:{
            background: `url("${handBag}")`,
            position: "absolute",
            transform: "translateX(72%) scale(0.5)",
            opacity: "1"
        },
        leave:{
            opacity: "0",
            transform: "translateX(40%) scale(0.5)",
        },
        config:{
            duration: 600
        }
    })
    const renderHandbagStyle = ()=>{
        return transitionStyleHandbagProps((propsAni, item)=>{
            return <animated.div className="handbag" style={propsAni} >
            </animated.div>
        })
    }
  return (
    <React.Fragment>
        {renderHandbagStyle()}
    </React.Fragment>
  )
}
