import React from "react";
import {Link} from "react-router-dom";

const VideoProduction = () => {
    var utils = require('./Utilities');

    return (
        <div className="container">
            <Link to="/videoAndCut">
                <ul className="infoBox">
                    <li>
                        <div className="infoRight" style={{width: "70%"}}>
                            <strong>Video Productions & Cut</strong>
                            <br/>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                        <div className="infoLeft" style={{width: "30%"}}>
                            <img src={utils.requirePic("videoproduction_logo.png")} alt="Symbol of video productions."/>
                        </div>
                    </li>
                    <br/>
                </ul>
            </Link>

            <Link to="/streaming">
                <ul className="infoBox">
                    <li>
                        <div className="infoLeft" style={{width: "70%"}}>
                            <strong>Streaming</strong>
                            <br/>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                        <div className="infoRight" style={{width: "30%"}}>
                            <img src={utils.requirePic("streaming_logo.png")} alt="Symbol of streaming."/>
                        </div>
                    </li>
                    <br/>
                </ul>
            </Link>
        </div>
    )
}

export default VideoProduction