import React from "react";

const Streaming = () => {
    var info = require('./contents/streaming.json');
    var utils = require('./Utilities');

    return(
        <div className="container">
            <br/>
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
                        <hr/>
                    </div>
                )
            })}
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
                        <hr/>
                    </div>
                )
            })}
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
                        <hr/>
                    </div>
                )
            })}
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
                        <hr/>
                    </div>
                )
            })}
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
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default Streaming