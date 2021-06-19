import React from "react";
import ReactPlayer from "react-player";

const VideoNCut = () => {
    var utils = require('./Utilities');
    var info = require('./contents/videocut.json');

    return(
        <div className="container">
            <br/>
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
    )
}

export default VideoNCut