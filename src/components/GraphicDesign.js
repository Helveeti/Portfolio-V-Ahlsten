import React from "react";

const GraphicDesign = () => {
    var info = require('./contents/graphic.json');
    var utils = require('./Utilities');

    return(
        <div className="container">
            <br/>
            {info.graphic.map((item, i) => {
                if(item.id === 2){
                    return(
                        <ul className="infoBox">
                            <li>
                                <div className="infoLeft" style={{width: "40%"}}>
                                    <strong>{item.title}</strong>
                                    <br/>
                                    <strong style={{"opacity": "0.5"}}>{item.year}</strong>
                                    <br/>
                                    {item.text}
                                </div>
                                <div className="infoRight" style={{width: "60%"}}>
                                    <img src={utils.requirePic(item.picture)} alt={item.alt} style={{"max-width": "200px", "height": "auto"}}/>
                                    <img src={utils.requirePic(item.secPicture)} alt={item.alt} style={{"max-width": "200px", "height": "auto"}}/>
                                </div>
                            </li>
                            <br/>
                        </ul>
                    )
                }
                else if(utils.rightAlign(i)) {
                    return(
                        <ul className="infoBox">
                            <li>
                                <div className="infoRight" style={{width: "60%"}}>
                                    <strong>{item.title}</strong>
                                    <br/>
                                    <strong style={{"opacity": "0.5"}}>{item.year}</strong>
                                    <br/>
                                    {item.text}
                                </div>
                                <div className="infoLeft" style={{width: "40%"}}>
                                    <img src={utils.requirePic(item.picture)} alt={item.alt} style={{"max-width": "250px", "height": "auto"}}/>
                                    <br/>
                                    <img src={utils.requirePic(item.secPicture)} alt={item.alt} style={{"max-width": "250px", "height": "auto"}}/>
                                </div>
                            </li>
                            <br/>
                        </ul>
                    )
                }else{
                    return(
                        <ul className="infoBox">
                            <li>
                                <div className="infoLeft" style={{width: "60%"}}>
                                    <strong>{item.title}</strong>
                                    <br/>
                                    <strong style={{"opacity": "0.5"}}>{item.year}</strong>
                                    <br/>
                                    {item.text}
                                </div>
                                <div className="infoRight" style={{width: "40%"}}>
                                    <img src={utils.requirePic(item.picture)} alt={item.alt} style={{"max-width": "250px", "height": "auto"}}/>
                                    <br/>
                                    <img src={utils.requirePic(item.secPicture)} alt={item.alt} style={{"max-width": "250px", "height": "auto"}}/>
                                </div>
                            </li>
                            <br/>
                        </ul>
                    )
                }}
            )}
        </div>
    )
}

export default GraphicDesign