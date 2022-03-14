import React from 'react';
import { useSelector } from 'react-redux';
import HairStyle from './HairStyle';
import BottomClothes from './BottomClothes';
import Handbag from './Handbag';
import NecklaceStyle from './NecklaceStyle';
import ShoesStyle from './ShoesStyle';
import TopClothes from './TopClothes';
export default function Model() {
  const { background } = useSelector(state => state.modelStateReducer);
  const styleBackground = {
    backgroundImage: `url("${background}")`
  }

  return (
    <React.Fragment>
       <React.Fragment>
            <div className="contain" style={{}}>
                <div className="body" />
                <div className="model" />
                <HairStyle></HairStyle>
                <NecklaceStyle></NecklaceStyle>
                <Handbag></Handbag>
                <div className="bikinitop" />
                <div className="bikinibottom"/>
                <BottomClothes></BottomClothes>
                <ShoesStyle></ShoesStyle>
                <TopClothes></TopClothes>
                <div className="background" style={styleBackground} />
            </div>
        </React.Fragment>
    </React.Fragment>
  )
}
