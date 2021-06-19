import React from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";

const Javaexamples = () => {
    var javaInfo = require('./contents/programming.json');
    var utils = require('./Utilities');

    return(
        <div className="container">
            <br/>
            {javaInfo.java.map((item) => {
                return(
                    <div className="TextDropdowns">
                        <DropdownButton id="drop-down-basic-button" title={item.title}>
                            <Dropdown.ItemText id="dropdown-items"
                                               style={{"font-weight": "bold"}}>{item.title}</Dropdown.ItemText>
                            <Dropdown.ItemText id="dropdown-items"
                                               style={{"opacity": "0.5"}}>{item.year} | {item.tech}</Dropdown.ItemText>
                            <Dropdown.ItemText id="dropdown-items">{item.text}<br/>Members on team: <strong>{item.team}</strong><br/>
                                <img src={utils.requirePic(item.picture)}
                                     style={{"margin-left": "auto", "margin-right": "auto", "display": "block", "max-width": "100%", "height": "auto"}}/>
                            </Dropdown.ItemText>

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

export default Javaexamples