import React from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import {Link} from "react-router-dom";

const Csharpexamples = () => {
    var cInfo = require('./contents/programming.json');
    var utils = require('./Utilities');

    return(
        <div className="container">
            <Link to={"/programming"}><strong><h1>←</h1></strong></Link>

            <div className="progTitle">
                <div className="infoRight" style={{width: "70%"}}>
                    <strong>{cInfo.info[2].title}</strong>
                    <br/>
                    {cInfo.info[2].text}
                </div>
                <div className="infoLeft" style={{width: "30%"}}>
                    <img src={utils.requirePic(cInfo.info[2].picture)} alt={cInfo.info[2].alt}/>
                </div>
            </div>

            <br/>
            {cInfo.cSharp.map((item) => {
                if(item.link === null){
                    return (
                        <div className="TextDropdowns">
                            <DropdownButton id="drop-down-basic-button" title={item.title}>
                                <Dropdown.ItemText id="dropdown-items"
                                                   style={{"font-weight": "bold"}}>{item.title}</Dropdown.ItemText>
                                <Dropdown.ItemText id="dropdown-items"><div style={{"opacity": "0.5"}}>{item.year} | {item.tech}</div></Dropdown.ItemText>
                                <Dropdown.ItemText id="dropdown-items">{item.text}<br/>Members on
                                    team: <strong>{item.team}</strong><br/>
                                    <img src={utils.requirePic(item.picture)}
                                         style={{
                                             "margin-left": "auto",
                                             "margin-right": "auto",
                                             "display": "block",
                                             "max-width": "100%",
                                             "height": "auto"
                                         }}
                                         alt={item.alt}/>
                                </Dropdown.ItemText>

                                <div className="linkButtons">
                                    <button type="button" className="git" style={{"float": "left", "width": "50%"}}
                                            onClick={() => utils.toLink(item.gitLink)}>Git
                                    </button>
                                    <button type="button" className="video" style={{"width": "50%"}}
                                            onClick={() => utils.toLink(item.videoLink)}>Video
                                    </button>
                                </div>
                            </DropdownButton>
                        </div>
                    )
                }else {
                    return (
                        <div className="TextDropdowns">
                            <DropdownButton id="drop-down-basic-button" title={item.title}>
                                <Dropdown.ItemText id="dropdown-items"
                                                   style={{"font-weight": "bold"}}>{item.title}</Dropdown.ItemText>
                                <Dropdown.ItemText id="dropdown-items"><div style={{"opacity": "0.5"}}>{item.year} | {item.tech}</div></Dropdown.ItemText>
                                <Dropdown.ItemText id="dropdown-items">{item.text}<br/>Members on
                                    team: <strong>{item.team}</strong><br/>
                                    <img src={utils.requirePic(item.picture)}
                                         style={{
                                             "margin-left": "auto",
                                             "margin-right": "auto",
                                             "display": "block",
                                             "max-width": "100%",
                                             "height": "auto"
                                         }}
                                         alt={item.alt}/>
                                </Dropdown.ItemText>

                                <div className="linkButtons">
                                    <button type="button" className="git" style={{"float": "left", "width": "33%"}}
                                            onClick={() => utils.toLink(item.gitLink)}>Git
                                    </button>
                                    <button type="button" className="link" style={{"width": "33%"}}
                                            onClick={() => utils.toLink(item.link)}>Link
                                    </button>
                                    <button type="button" className="video" style={{"width": "33%"}}
                                            onClick={() => utils.toLink(item.videoLink)}>Video
                                    </button>
                                </div>
                            </DropdownButton>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Csharpexamples