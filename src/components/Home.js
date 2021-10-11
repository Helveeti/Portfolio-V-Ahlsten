import React from "react";

const Home = () => {
    var utils = require('./Utilities');

    return(
        <div className="container">
            <div className="info">
                <p style={{"border": "5px solid red", "padding": "10px"}}><strong>Portfolio under developement.</strong><br/>
                            •   Working on descriptions. Lorem ipsum still placeholder in couple pages.<br/>
                            •   Lacking pictures on couple projects.<br/>
                            •   Mobile and tablet view still under production.
                </p>
            </div>

            <div>
                <div className="infoBox">
                    <div className="infoRight">
                        <img src={utils.requirePic("me.JPG")} alt={"Picture of Vertti Ahlstén"} style={{"maxHeight": "250px", "border-radius": "50px"}}/>
                    </div>

                    <div className="infoLeft" style={{"width": "70%"}}>
                        <h2 style={{"float": "left"}}><strong>"</strong></h2><br/>
                        <h5>My name is Vertti Ahlstén and I’m quite known for my bad puns. It would be such a punishment if I didn´t compensate with the quality of my work.</h5>
                        <h5>—Do not worry, I work in silence, if you do not count chitchat with a yellow duck.</h5><h2 style={{"float": "right"}}><strong>"</strong></h2>
                    </div>
                </div>

                <div className="infoBottom">
                    <hr/>
                    <p>I have created this website to show you all projects and work I have done during these past years. There is a lot of projects I have made during school, as a hobby and for work. The projects variates from programming to streaming and graphic design. Some projects might have both illustration and programming and some projects focus on more in one area.
                        Now that you know a bit about this website, I should tell you more about me:
                        <ul>
                            <li>•	Currently I am an ICT - Bachelor of Engineering student at Metropolia University of Applied Sciences. I am going to graduate in December 2022 as Software Engineer.</li>
                            <li>•	Before my current studies, I graduated 2018 as media-assistant from Helsinki’s Vocational School and my specialization was in Digital Communications.</li>
                            <li>•	Back 2015, I studied Printing & Communications for a year. So, I know something from that area as well.</li>
                        </ul>
                    </p>
                </div>
                <div className="infoBottom">
                    <p>
                        During these years I have participated to various events as volunteer to deepen my skillset, such as Assembly (2019) I took part as video editor. Here is some other events I have participated:
                        <ul>
                            <li>•	Finnish Game Jam (2021) as coder of my team.</li>
                            <li>•	As a Streamer I have participated in events like Kuva & Kamera (2018), GameExpo Cosvision’s Cosplay competition (2018) and Taitaja competition (2017).</li>
                            <li>•	I participated as assistant to events such as Desucon & Desucon Frostbite (2017), Popcult (2017) and Tracon (2017).</li>
                        </ul>
                    </p>
                </div>
                <div className="infoBottom">
                    <p>
                        I may not have much of work experience, although I have participated into various game projects, sometimes as game developer and currently I am part of bigger game project, produced by Kuninkaantie RY. There I am working as web-developer. Sometimes I do graphic design as well as video editing. My earlier work experience consists of:
                        <ul>
                            <li>•	I worked as streamer assistant in Unigrafia Oy back in 2018. I assisted in various streaming projects, made graphical content to streams and to other needs and I final edited the streams for pubhlising.</li>
                            <li>•	I was hired to City of Helsinki’s TYKKI-project to design and develop an interactive website back in 2017.</li>
                            <li>•	I worked as Community Associate in Regus Oy back in 2017. My work included a various different tasks, from customer service to cleaning and delivering mails in.</li>
                        </ul>
                    </p>
                </div>
                <div className="infoBottom">
                    <p>
                        I am still looking for my place in work industry and if my descriptions piqued your interest, you can find my cv from here.
                    </p>
                    <p>
                        I hope you enjoy your stay, and you can contact me via contact form in <a href={"/contact"}>contact</a> page.
                    </p>
            </div>
            </div>
        </div>
    )
}

export default Home