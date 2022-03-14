import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { tryClothAction } from '../Redux/actionList';
import {useSpring} from 'react-spring';
export default function CardItem() {
    const { tabPanes } = useSelector(state => state.appStateReducer);
    const dispatch = useDispatch();
    // const springProps = useSpring({
    //     from: {x:100, width: 80,
    //         height: 80,backgroundColor: '#46e891'},
    //     to: {x:140,width: 80,
    //         height: 80,backgroundColor: "1000"},
    //     config:{duration: 1500}
    //   })
      


    // console.log(tabPanes)
    const renderContent = (renderType) => {
        return tabPanes.map((tab, index) => {
            if (tab.type === renderType) {
                return <div className="col-md-3" key={index}>
                    <div  className="card text-center">
                        <img src={tab.imgSrc_jpg} alt="..." />
                        <h4><b>{tab.name}</b></h4>
                        <button className='btn btn-primary' onClick={(event)=>{
                            console.log(event.get)
                            dispatch(tryClothAction(tab));
                        }}>Thử đồ</button>
                    </div>
                </div>
            }
        })
    }
    
    return (
        <React.Fragment>
            <div className="well">
                {/* Tab panes */}
                <div className="tab-content">
                    <div className="tab-pane container active" id="tabTopClothes">
                        <div className="container">
                            <div className="row">
                                {renderContent("topclothes")}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabBotClothes">
                    <div className="container">
                            <div className="row">
                                {renderContent("botclothes")}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabShoes">
                    <div className="container">
                            <div className="row">
                                {renderContent("shoes")}
                            </div>
                        </div>
                        </div>
                    <div className="tab-pane container fade" id="tabHandBags">
                    <div className="container">
                            <div className="row">
                                {renderContent("handbags")}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabNecklaces">
                    <div className="container">
                            <div className="row">
                                {renderContent("necklaces")}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabHairStyle">
                    <div className="container">
                            <div className="row">
                                {renderContent("hairstyle")}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabBackground">
                    <div className="container">
                            <div className="row">
                                {renderContent("background")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
