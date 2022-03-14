import React from 'react'
import { useSelector } from 'react-redux';
import { animated, useTransition } from 'react-spring';
export default function BottomClothes() {
    const bikinibottom = useSelector(state => state.modelStateReducer.bikinibottom);
    const transitionStyleBikiniBottomProps = useTransition(bikinibottom, {
        from: {
            left: "-85%",
            opacity: "0.5",
            transform: "translateX(0%) scale(0.5)",
            backgroundImage: `url("${bikinibottom}")`,
        },
        enter: {
            width: "500px",
            height: "1000px",
            background: `url("${bikinibottom}")`,
            top: "-30%",
            left: "-5%",
            zIndex: "2",
            transform: "scale(0.5)",
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
    const renderBikiniBottom = () => {
        return transitionStyleBikiniBottomProps((propsAni, item) => {
            return <animated.div className="bikinitop" style={propsAni} >
            </animated.div>
        })
    }
    return (
        <React.Fragment>
            {renderBikiniBottom()}
        </React.Fragment>
    )
}
