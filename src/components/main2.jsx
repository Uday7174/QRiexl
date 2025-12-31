import React from "react";
import "../CSS/main2.css";

function Main2() {
    return (
            <div className="main2">
                <section className="main2-heading">
                    <h1>How to create a free QR Code in 3 simple steps</h1>
                    <h2>Follow these easy steps to generate your own QR code quickly and effortlessly.</h2>
                </section>
                <hr />
                <section className="main2-steps">
                    <div className="step1">
                        <div className="step-content">
                            <h2>Step 1 : Choose your QR Code type</h2>
                            <p>Select the type of content you want your QR code to link to, such as URL, text, or contact information.</p>
                        </div>
                        <img className="img" src="/images/choose_type-removebg-preview.png" alt="choose type" />
                    </div>
                    <hr />
                    <div className="step2">
                        <img className="img" src="/images/enter_url-removebg-preview.png" alt="enter info" />
                        <div className="step-content">
                            <h2>Step 2 : Enter your information</h2>
                            <p>Input the necessary details based on the QR code type you selected in Step 1.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="step3">
                        <div className="step-content">
                            <h2>Step 3 : Generate and download</h2>
                            <p>Click the "Generate QR Code" button to create your QR code, then download it for free.</p>
                            <p>Pick PNG, or SVG format, hit download, and you’re all set to share it anywhere!</p>
                        </div>
                        <img className="img" src="/images/homepage-step-3-removebg-preview.png" alt="generate download" />
                    </div>
                
                </section>
            </div>
    );
}

export default Main2;