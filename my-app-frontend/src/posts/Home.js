import React from "react";
import logo from '../logo.svg';
import "../App.css";


function Home() {

    //ok



return (
    <>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p><em>makerspace</em></p>
            <h1>Welcome to makerspace</h1>
            <h2>
                We're here to bring all of the makers of the world<br />
                together to share their 3d designs and creations.<br />
                A place to share both knowledge and passion for 3d printing!
            </h2>
        </header>
    </>
);
}

export default Home