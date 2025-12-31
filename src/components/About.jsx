import React from "react";
import "../CSS/About.css";

function About() {
  return (
    <section id="about">
      <div className="about">
        <div className="about-heading">
          <h1>About QRixel</h1>
        </div>
        <div className="about-description">
          <h2>What is QRixel</h2>
          <p>QRelix is a simple and user-friendly web application that allows users to generate QR codes quickly and easily.
            Whether you need a QR code for a URL, text, contact information, or any other data, our tool has got you covered.
            QRixel is ideal for personal, business, or educational use. Its goal is to simplify digital interactions by bridging physical and online worlds.
          </p>
        </div>
        <div className="about-content">

          <section className="about-box">
            <h2>Objective</h2>
            <p>The objective of QRixel is to provide a straightforward and efficient solution for generating QR codes.
              It aims to make QR code creation accessible to everyone, regardless of technical expertise, by offering an
              intuitive interface and quick generation process.
            </p>
          </section>

          <section className="about-box">
            <h2>Features</h2>
            <ul>
              <li>Easy-to-use interface</li>
              <li>Supports various data types (URL, text, contact info, etc.)</li>
              <li>Customizable QR code design</li>
              <li>High-resolution QR code generation</li>
              <li>Free to use</li>
            </ul>
          </section>

          <section className="about-box">
            <h2>Limitation</h2>
            <ol>
              <li>Limited to generating static QR codes.</li>
              <li>Need good speed of Internet.</li>
              <li>Requires internet access to download dependencies initially.</li>
              <li>It can only converts the URL into QR codes.</li>
            </ol>
          </section>

        </div>
      </div>
    </section>
  );
}

export default About;
