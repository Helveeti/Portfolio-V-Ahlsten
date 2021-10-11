import React from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import {Link} from "react-router-dom";

const Cexamples = () => {
    var cInfo = require('./contents/programming.json');
    var utils = require('./Utilities');

    return(
        <div className="container">
            <Link to={"/programming"}><strong><h1>←</h1></strong></Link>

            <div className="progTitle">
                <div className="infoLeft" style={{width: "70%"}}>
                    <strong>{cInfo.info[3].title}</strong>
                    <br/>
                    {cInfo.info[3].text}
                </div>
                <div className="infoRight" style={{width: "30%"}}>
                    <img src={utils.requirePic(cInfo.info[3].picture)} alt={cInfo.info[3].alt}/>
                </div>
            </div>

            <br/>
            {cInfo.c.map((item) => {
                return(
                    <div className="TextDropdowns">
                        <DropdownButton id="drop-down-basic-button" title={item.title}>
                            <Dropdown.ItemText id="dropdown-items"
                                               style={{"font-weight": "bold"}}>{item.title}</Dropdown.ItemText>
                            <Dropdown.ItemText id="dropdown-items"><div style={{"opacity": "0.5"}}>{item.year} | {item.tech}</div></Dropdown.ItemText>
                            <Dropdown.ItemText id="dropdown-items">{item.text}<br/>Members on team: <strong>{item.team}</strong></Dropdown.ItemText>

                            <div className="linkButtons">
                                <button type="button" className="git" style={{"float": "left", "width": "100%"}}
                                        onClick={() => utils.toLink(item.gitLink)}>Git
                                </button>
                            </div>
                        </DropdownButton>
                    </div>
                )
            })}
        </div>
    )
}

export default Cexamples