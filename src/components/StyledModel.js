import styled from 'styled-components';

export const StyledHair = styled.div`
width: 1000px;
height: 1000px;
position: absolute;
top: -75%;
right: -57%;
transform: scale(0.15);
zIndex:4;
background: url(${props => props.styledBackground});
`
export const StyleNecklace = styled.div`
width: 500px;
height: 1000px;
position: absolute;
bottom: -40%;
right: -3.5%;
transform: scale(0.5);
zIndex: 4;
background: url(${props => props.styledBackground});
`
export const StyleBikiniTop = styled.div`
width: 500px;
height: 500px;
position: absolute;
top: -9%;
left: -5%;
zIndex:3;
transform: scale(0.5);
background: url(${props => props.styledBackground});
`
export const StyleBikiniBottom = styled.div`
width: 500px;
height: 1000px;
position: absolute;
top: -30%;
left: -5%;
zIndex: 2;
transform: scale(0.5);
background: url(${props => props.styledBackground});
`
export const StyleHandback = styled.div`
width: 500px;
height: 1000px;
position: absolute;
bottom: -40%;
right: -3.5%;
transform: scale(0.5);
zIndex: 4;
background: url(${props => props.styledBackground});
`

export const StyleFeet = styled.div`
width: 500px;
height: 1000px;
position: absolute;
bottom: -37%;
right: -3.5%;
transform: scale(0.5);
zIndex: 1;
background: url(${props => props.styledBackground});
`

export const StyleBackground = styled.div`
background-image: url(${props => props.styledBackground});
`

