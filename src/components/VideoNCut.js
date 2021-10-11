import React from "react";
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";

const VideoNCut = () => {
    var utils = require('./Utilities');
    var info = require('./contents/videocut.json');

    return(
        <div className="container">
            <Link to={"/videoProductions"}><strong><h1>←</h1></strong></Link>

            <div className="progTitle">
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
            </div>

            <br/>
            <div className="videoBlock">
                <h5>King's Road Game Project</h5>
                <hr/>
                {info.KingsRoad.map((item, i) => {
                    return(
                        <div className="infoBox">
                            <strong>{item.title}</strong>
                            <br/>
                            <strong style={{"opacity": "0.5"}}>{item.year}</strong>
                            <br/>
                            {item.text}
                            <br/>
                            <br/>
                            <div className="video-responsive">
                                <iframe
                                    width="853"
                                    height="480"
                                    src={`https://www.youtube.com/embed/${item.link}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube"
                                />
                            </div>
                            <hr/>
                        </div>
                    )
                })}
            </div>

            <br/>

            <div className="videoBlock">
                <h5>Mediastadi goes TFF</h5>
                <hr/>
                {info.TFF.map((item, i) => {
                    if(item.source === "Facebook") {
                        return (
                            <div className="infoBox">
                                <strong>{item.title}</strong>
                                <br/>
                                <strong style={{"opacity": "0.5"}}>{item.year}</strong>
                                <br/>
                                {item.text}
                                <br/>
                                <br/>
                                <div className="video-responsive">
                                    <ReactPlayer url={item.link}
                                                 className="FacebookPlayer"
                                                 frameBorder="0"
                                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                 allowFullScreen
                                                 controls/>
                                </div>
                                <hr/>
                                <br/>
                            </div>
                        )
                    }else{
                        return(
                            <div className="infoBox">
                                <strong>{item.title}</strong>
                                <br/>
                                <strong style={{"opacity": "0.5"}}>{item.year}</strong>
                                <br/>
                                {item.text}
                                <br/>
                                <br/>
                                <div className="video-responsive">
                                    <iframe
                                        width="853"
                                        height="480"
                                        src={`https://www.youtube.com/embed/${item.embedId}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                    />
                                </div>
                                <hr/>
                            </div>
                        )
                    }
                })}
            </div>

            <br/>

            <div className="videoBlock">
                <h5>Taitaja</h5>
                <hr/>
                {info.Taitaja.map((item, i) => {
                    return(
                        <div className="infoBox">
                            <strong>{item.title}</strong>
                            <br/>
                            <strong style={{"opacity": "0.5"}}>{item.year}</strong>
                            <br/>
                            {item.text}
                            <br/>
                            <br/>
                            <div className="video-responsive">
                                <iframe
                                    width="853"
                                    height="480"
                                    src={`https://www.youtube.com/embed/${item.link}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube"
                                />
                            </div>
                            <hr/>
                        </div>
                    )
                })}
            </div>

            <br/>

            <div className="videoBlock">
                <h5>Vocational College of Helsinki</h5>
                <hr/>
                {info.Stadinao.map((item, i) => {
                    return(
                        <div className="infoBox">
                            <strong>{item.title}</strong>
                            <br/>
                            <strong style={{"opacity": "0.5"}}>{item.year}</strong>
                            <br/>
                            {item.text}
                            <br/>
                            <br/>
                            <div className="video-responsive">
                                <iframe
                                    width="853"
                                    height="480"
                                    src={`https://www.youtube.com/embed/${item.link}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube"
                                />
                            </div>
                            <hr/>
                        </div>
                    )
                })}
            </div>

            <br/>

            <div className="videoBlock">
                <h5>Hobby projects</h5>
                <hr/>
                {info.FanEdits.map((item, i) => {
                    return(
                        <div className="infoBox">
                            <strong>{item.title}</strong>
                            <br/>
                            <strong style={{"opacity": "0.5"}}>{item.year}</strong>
                            <br/>
                            {item.text}
                            <br/>
                            <br/>
                            <div className="video-responsive">
                                <iframe
                                    width="853"
                                    height="480"
                                    src={`https://www.youtube.com/embed/${item.link}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube"
                                />
                            </div>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default VideoNCut