import styled from 'styled-components';

export const StyledHair = styled.div`
width: 1000px;
height: 1000px;
position: absolute;
top: -75%;
right: -57%;
transform: scale(0.15);
z-index:4;
background: url(${props => props.styledBackground});
`
export const StyleNecklace = styled.div`
width: 500px;
height: 1000px;
position: absolute;
bottom: -40%;
right: -3.5%;
transform: scale(0.5);
z-index: 4;
background: url(${props => props.styledBackground});
`
export const StyleBikiniTop = styled.div`
width: ${props => props.styledBackground===""? "250px":"500px"};
height: ${props => props.styledBackground===""? "500px":"500px"};
position: absolute;
top: ${props => props.styledBackground ===""?"12%":"-9%"};
left: ${props => props.styledBackground ===""?"22%":"-5%"};
z-index:3;
transform: ${props => props.styledBackground ===""?"none":"scale(0.5)"};
background: url(${props =>props.styledBackground ==="" ? './assets/images/allbody/bikini_branew.png': props.styledBackground});
`
export const StyleBikiniBottom = styled.div`
width: ${props => props.styledBackground===""? "250px":"500px"};
height: ${props => props.styledBackground===""? "500px":"1000px"};
position: absolute;
top: ${props => props.styledBackground===""? "12%":"-30%"};
left: ${props => props.styledBackground===""? "22%":"-5%"};
z-index: ${props => props.styledBackground===""? "1":"2"};
transform: ${props => props.styledBackground===""? "none":"scale(0.5)"};
background: url(${props =>props.styledBackground ==="" ? './assets/images/allbody/bikini_pantsnew.png': props.styledBackground});
`
export const StyleHandback = styled.div`
width: 500px;
height: 1000px;
position: absolute;
bottom: -40%;
right: -3.5%;
transform: scale(0.5);
z-index: 4;
background: url(${props => props.styledBackground});
`

export const StyleFeet = styled.div`
width: 500px;
height: 1000px;
position: absolute;
bottom: -37%;
right: -3.5%;
transform: scale(0.5);
z-index: 1;
background: url(${props => props.styledBackground});
`

export const StyleBackground = styled.div`
background-image: url(${props => props.styledBackground});
`

