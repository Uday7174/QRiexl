import React from "react";
import "../CSS/home.css";
import Input from "../components/Input";
import Main2 from "../components/main2";
import Main3 from "../components/Main3";

function home() {
    return (
        <section id="home">
        <div className="home">
            <section className="home-heading">
                <h1>QRixel</h1>
                <p>A free, all-in-one QR code tool for fast and easy creation and editing.</p>
            </section>
            <Input />
            <Main2 />
            <Main3 />
        </div>
        </section>
    )
}

export default home;