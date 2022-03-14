import React from 'react'
import { useSelector } from 'react-redux';
import { animated, useTransition } from 'react-spring';
export default function ShoesStyle() {
    const shoes = useSelector(state => state.modelStateReducer.feet);
    const transitionStyleShoesProps = useTransition(shoes, {
        from: {
            left: "-85%",
            opacity: "0.5",
            transform: "translateX(0%) scale(0.5)",
            backgroundImage: `url("${shoes}")`,
        },
        enter: {
            background: `url("${shoes}")`,
            position: "absolute",
            transform: "translateX(73.25%) scale(0.5)",
            opacity: "1"
        },
        leave: {
            opacity: "0",
            transform: "translateX(40%) scale(0.5)",
        },
        config: {
            duration: 600
        }
    })
    const renderShoesStyle = () => {
        return transitionStyleShoesProps((propsAni, item) => {
            return <animated.div className="feet" style={propsAni} >
            </animated.div>
        })
    }
    return (
        <React.Fragment>
            {renderShoesStyle()}
        </React.Fragment>
    )
}
