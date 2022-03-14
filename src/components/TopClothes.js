import React from 'react'
import { useSelector } from 'react-redux';
import { animated, useTransition } from 'react-spring';
export default function TopClothes() {
    const bikinitop = useSelector(state => state.modelStateReducer.bikinitop);
    const transitionStyleBikiniTopProps = useTransition(bikinitop, {
        from: {
            left: "-85%",
            opacity: "0.5",
            transform: "translateX(0%) scale(0.5)",
            backgroundImage: `url("${bikinitop}")`,
        },
        enter: {
            background: `url("${bikinitop}")`,
            width: "500px",
        height: "500px",
            top: "-9%",
            left: "-5%",
            zIndex: "3",
            opacity: "1",
        },
        leave: {
            opacity: "0",
            transform: "translateX(40%) scale(0.5)",
        },
        config: {
            duration: 600
        }
    })
    const renderBikiniTop = () => {
        return transitionStyleBikiniTopProps((propsAni, item) => {
            return <animated.div className="bikinitop" style={propsAni} >
            </animated.div>
        })
    }
    return (
        <React.Fragment>
            {renderBikiniTop()}
        </React.Fragment>
    )
}
