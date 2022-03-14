import React from 'react'
// import { StyleBikiniBottom, StyleBikiniTop, StyledHair, StyleNecklace, StyleHandback, StyleFeet, StyleBackground } from './StyledModel'
import { useSelector } from 'react-redux';
import { animated, useTransition } from 'react-spring';
export default function HairStyle() {
    const hairstyle = useSelector(state => state.modelStateReducer.hairstyle);
    const transitionHairStyleProps = useTransition(hairstyle, {
        from: {
            left: "-85%",
            opacity: "0.5",
            transform: "translateX(0%) scale(0.15)",
            backgroundImage: `url("${hairstyle}")`,
        },
        enter: {
            backgroundImage: `url("${hairstyle}")`,
            transform: "translateX(11.35%) scale(0.15)",
            opacity: "1",
        },
        leave: {
            opacity: "0",
            transform: "translateX(40%) scale(0.15)",
        },
        config: {
            duration: 600
        }
    })
    const renderHairStyle = () => {
        return transitionHairStyleProps((propsAni, item) => {
            console.log(propsAni);
            return <animated.div className="hairstyle" style={propsAni} >
            </animated.div>
        })
    }

    // const ini = useEffect(()=>{
    //    return renderabc()
    // })
    //const abc = useMemo(()=>renderabc(),[hairstyle])
    return (
        <React.Fragment>
            {renderHairStyle()}
        </React.Fragment>
    )
}
