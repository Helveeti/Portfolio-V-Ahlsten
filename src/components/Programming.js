import React from "react";
import {Link} from "react-router-dom";

const Programming = () => {
    var info = require('./contents/programming.json');
    var utils = require('./Utilities');

    return(
        <div className="container">
            <br/>
                {info.info.map((item, i) => {
                    if(utils.rightAlign(i)) {
                        return(
                            <Link to={item.link}>
                            <ul className="infoBox">
                                <li>
                                    <div className="infoRight" style={{width: "70%"}}>
                                        <strong>{item.title}</strong>
                                        <br/>
                                        {item.text}
                                    </div>
                                    <div className="infoLeft" style={{width: "30%"}}>
                                        <img src={utils.requirePic(item.picture)} alt={item.alt}/>
                                    </div>
                                </li>
                                <br/>
                            </ul>
                            </Link>
                        )
                    }else{
                        return(
                            <Link to={item.link}>
                            <ul className="infoBox">
                                <li>
                                    <div className="infoLeft" style={{width: "70%"}}>
                                        <strong>{item.title}</strong>
                                        <br/>
                                        {item.text}
                                    </div>
                                    <div className="infoRight" style={{width: "30%"}}>
                                        <img src={utils.requirePic(item.picture)} alt={item.alt}/>
                                    </div>
                                </li>
                                <br/>
                            </ul>
                            </Link>
                        )
                    };
                })}
        </div>
    );
}

export default Programming