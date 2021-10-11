import React from "react";
import {Link} from "react-router-dom";

const Streaming = () => {
    var info = require('./contents/streaming.json');
    var utils = require('./Utilities');

    return(
        <div className="container">
            <Link to={"/videoProductions"}><strong><h1>←</h1></strong></Link>

            <div className="progTitle">
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
            </div>

            <div className="videoBlock">
                <h5>Unigrafia</h5>
                <hr/>
                {info.unigrafia.map((item, i) => {
                    return(
                        <div className="infoBox">
                            <strong>{item.title}</strong>
                            <br/>
                            <strong style={{"opacity": "0.5"}}>{item.year}</strong>
                            <br/>
                            {item.text}
                            <br/>
                            <br/>
                            <button type="button" className="link" style={{"width": "100%"}}
                                    onClick={() => utils.toLink(item.link)}>Unitube - {item.title}
                            </button>
                            <br/>
                            <hr/>
                        </div>
                    )
                })}
            </div>

            <div className="videoBlock">
                <h5>Stadin ammattiopisto</h5>
                <hr/>
                {info.stadinao.map((item, i) => {
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
                            <br/>
                            <hr/>
                        </div>
                    )
                })}
            </div>

            <div className="videoBlock">
                <h5>Kuva ja Kamera-messut 2018</h5>
                <hr/>
                {info.kuvajakamera.map((item, i) => {
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
                            <br/>
                            <hr/>
                        </div>
                    )
                })}
            </div>

            <div className="videoBlock">
                <h5>Cosvision</h5>
                <hr/>
                {info.cosplaysm.map((item, i) => {
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
                            <br/>
                            <hr/>
                        </div>
                    )
                })}
            </div>

            <div className="videoBlock">
                <h5>Taitaja</h5>
                <hr/>
                {info.taitajat.map((item, i) => {
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
                            <br/>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Streaming