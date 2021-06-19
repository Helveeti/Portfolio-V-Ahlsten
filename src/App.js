import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'

import Home from "./components/Home.js";
import Programming from "./components/Programming.js";
import JSexamples from "./components/JSexamples";
import Javaexamples from "./components/Javaexamples";
import Csharpexamples from "./components/Csharpexamples";
import Cexamples from "./components/Cexamples";
import GraphicDesign from "./components/GraphicDesign";
import Streaming from "./components/Streaming";
import VideoProduction from "./components/VideoProduction";
import VideoNCut from "./components/VideoNCut";
import Contact from "./components/Contact";

import {Button, ButtonGroup, Dropdown, Table} from "react-bootstrap";
import './components/Style.css';

const App = () => {

    const padding = {
        padding: 5
    }

    return (
        <div className="body">
            <div className="nav">
                <Router>
                    <div className="navbar">
                            <Link to="/" style={padding}><Button variant="primary">Home</Button></Link>
                            <Dropdown as={ButtonGroup}>
                                <Link to="/programming"><Button variant="primary">Programming</Button></Link>

                                <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item a href="/javascriptExamples">JavaScript</Dropdown.Item>
                                    <Dropdown.Item a href="/javaExamples">Java</Dropdown.Item>
                                    <Dropdown.Item a href="/csharpExamples">C#</Dropdown.Item>
                                    <Dropdown.Item a href="/cExamples">C/C++</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        <Link to="/graphicDesign" style={padding}><Button variant="primary">Graphic design</Button></Link>
                        <Dropdown as={ButtonGroup}>
                            <Link to="/videoProductions"><Button variant="primary">Video productions</Button></Link>

                            <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

                            <Dropdown.Menu>
                                <Dropdown.Item a href="/videoAndCut">Video productions & Cut</Dropdown.Item>
                                <Dropdown.Item a href="/streaming">Streaming</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Link to="/contact" style={{padding, "float": "right"}}><Button variant="secondary">Contact</Button></Link>
                    </div>

                    <Switch>
                        <Route path="/programming">
                            <Programming />
                        </Route>
                        <Route path="/javascriptExamples">
                            <JSexamples />
                        </Route>
                        <Route path="/javaExamples">
                            <Javaexamples />
                        </Route>
                        <Route path="/csharpExamples">
                            <Csharpexamples />
                        </Route>
                        <Route path="/cExamples">
                            <Cexamples />
                        </Route>
                        <Route path="/graphicDesign">
                            <GraphicDesign />
                        </Route>
                        <Route path="/videoProductions">
                            <VideoProduction />
                        </Route>
                        <Route path="/videoAndCut">
                            <VideoNCut />
                        </Route>
                        <Route path="/streaming">
                            <Streaming />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <hr/>
            <p className="footer">© Vertti Ahlstén 2021</p>
        </div>
    )
}

export default App
