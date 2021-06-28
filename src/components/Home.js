import React from "react";

const Home = () => {
    var utils = require('./Utilities');

    return(
        <div className="container">
            <div>
                <h1 style={{"margin": "auto"}}>Welcome!</h1>
                <div className="infoBox">
                    <div className="infoRight">
                        <img src={utils.requirePic("omakuva.jpg")} alt={"Picture of Vertti Ahlstén"} style={{"maxHeight": "250px"}}/>
                    </div>

                    <div className="infoLeft" style={{"width": "70%"}}>
                    <p>Kerron hieman itsestäni, opiskelen Tieto- ja viestintätekniikkaa Metropoliassa. Omaan kattavan tietotaidon AV-alaan liittyen opiskeltuani Audiovisuaalista viestintää Stadin ammattiopistosta. Niin valokuvaus kuin liikkuva kuva sujuvat minulta ongelmitta.
                        Olen luova ja paineensietokykyinen. Olen muunmuassa ollut osana Cosplayn SM-kilpailujen striimaus-tiimiä.
                        Opiskelin vuoden painoviestintää, joten tietoa ja taitoa löytyy myös sen saralta.</p>
                    </div>
                </div>

                    <p>Opiskelijakunnan toiminnassa olen toiminut tutor- ja KV-tutorina, sekä suorittanut verso-, eli vertaissovittelija koulutuksen.
                        Desucon Frostbite & Desucon 2017-tapahtumissa toimin iltabiletiimissä assistenttina. Autoin järjestämään conien iltabileitä ja osallistuin ideoimiseen sekä toteutukseen.
                        Taitajat 2017-kisoissa toimin kisastudion striimaustiimin liveleikkaajana. Olosuhteet olivat haastavat, mutta tiimin voimalla selvisimme striimistä ilman suurempia ongelmia.
                        Popcult 2017 olin saliavustajana ja valvoin ohjelmien sujuvuutta. Ohjeistin ja autoin puhujia niin ennen ohjelmaa kuin sen aikanakin.
                        Reguksen toimistohotellissa työskentelin kesän 2017 respassa. Työt vaativat kylmät hermot, sillä se sisälsi niin asiakaspalvelua kuin puhelinvaihteen haastavuuden. Työt myös opettivat sopeutuvuutta työtehtäviin, välillä imuroin lattioita ja välillä huolehdin yksin toimistohotellin vastaanotosta sekä yleisistä tiloista.
                        Tracon 2017 toimin ohjelma-avustajana, karaoke toimipisteenäni. Pidin huolta pisteestä itsenäisesti vuorojeni ajan ja omaan käyttökokemusta Ultrastar Deluxe Demo:sta.
                        GameExpossa 2017 järjestetyissä Cosplayn SM-kisoissa toimin striimaustiimissä liveleikkaajana ja työ vaati kylmiä hermoja ja jatkuvaa tarkkuutta. Omaan tuntemusta TriCasterista.
                        Tulospuu 2017 oli Helsingin Kaupungin TYKKI-hankkeeseen visuaalinen- sekä toiminnallinen sivukokonaisuus.
                        Kuva & Kamera 2018 toimin striimin liveleikkaajana sekä tapahtuman logon animoijana.
                        Tampere Film Festival 2018 editoin kuvausryhmän taltioimia videoita esille pantavaksi TFF Facebook sivulle sekä toimin Mediastadi Goes TFF-blogin teknisenä vastaavana. Suunnittelin ja toteutin myös logon.
                        Stadin ammattiopiston tasa-arvo- ja yhdenvertaisuus paneeli 2018 olin striimin leikkaajana.
                        Unigrafialla 2018 toimin striimausassistenttina.


                        Olen valmis tekemään erilaisiakin töitä, mutta koodaus, mm. kotisivujen päivitys, animointi, striimaus, kuvaus & kuvankäsittely, graafinen suunnittelu & taitto, istuisi minulle kuin nenä päähän.
                        Olen aina valmiina haastamaan itseni, ja minulle sopiikin millainen työ vain, spontaaneista työtehtävistä rutiininomaisiin töihin.


                        Kiinnostuitko?</p>
            </div>
        </div>
    )
}

export default Home