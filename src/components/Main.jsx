import React, { useState } from "react";
import "../CSS/main.css";

function Main(props) {
  const [type, setType] = useState("url");

  return (
    <div className="main">
      <section className="main-content">
        <div className="main-box">
          <div className="main-icons-content">

            <button className="main-icons" onClick={() => setType("url")}>
              <img src="/images/url.png" alt="URL" className="icon-color" />
              <p>URL</p>
            </button>

            <button className="main-icons" onClick={() => setType("plaintext")}>
              <img
                src="/images/plain-text.png"
                alt="Plain-text"
                className="icon-color"
              />
              <p>Plain text</p>
            </button>

            <button className="main-icons" onClick={() => setType("email")}>
              <img src="/images/email.png" alt="Email" className="icon-color" />
              <p>Email</p>
            </button>

            <button className="main-icons" onClick={() => setType("sms")}>
              <img src="/images/sms.png" alt="SMS" className="icon-color" />
              <p>SMS</p>
            </button>

            <button className="main-icons" onClick={() => setType("phone")}>
              <img
                src="/images/phone.png"
                alt="Phone"
                className="icon-color"
              />
              <p>Phone</p>
            </button>

          </div>

          {type === "url" && (
            <form onSubmit={(e) => props.handleSubmit(e, "url")} className="form">
              <p>Enter a URL to encode:</p>
              <input
                className="main-plane-area"
                name="dataInput"
                type="url"
                placeholder="https://example.com"
                required
              />
              <input
                className="main-plane-area"
                name="dataName"
                type="text"
                placeholder="QR Name"
                required
              />
              <button className="main-button" type="submit">
                Generate URL QR
              </button>
            </form>
          )}

          {type === "plaintext" && (
            <form onSubmit={(e) => props.handleSubmit(e, "plaintext")} className="form">
              <p>Enter some text:</p>
              <textarea
                className="main-text"
                name="plainText"
                placeholder="Enter text here"
                required
              ></textarea>
              <input
                className="main-plane-area"
                name="dataName"
                type="text"
                placeholder="QR Name"
                required
              />
              <button className="main-button" type="submit">
                Generate Text QR
              </button>
            </form>
          )}

          {type === "email" && (
            <form onSubmit={(e) => props.handleSubmit(e, "email")} className="form">
              <p>Email QR will open email composer when scanned</p>
              <input
                className="main-plane-area"
                name="email"
                type="email"
                placeholder="Recipient email"
                required
              />
              <input
                className="main-plane-area"
                name="subject"
                type="text"
                placeholder="Subject"
              />
              <textarea
                className="main-text"
                name="body"
                placeholder="Body text"
              ></textarea>
              <input
                className="main-plane-area"
                name="dataName"
                type="text"
                placeholder="QR Name"
                required
              />
              <button className="main-button" type="submit">
                Generate Email QR
              </button>
            </form>
          )}

          {type === "sms" && (
            <form onSubmit={(e) => props.handleSubmit(e, "sms")} className="form">
              <p>Enter SMS details:</p>
              <input
                className="main-plane-area"
                name="phone"
                type="tel"
                placeholder="Phone number"
                required
              />
              <textarea
                className="main-text"
                name="message"
                placeholder="Message body"
                required
              ></textarea>
              <input
                className="main-plane-area"
                name="dataName"
                type="text"
                placeholder="QR Name"
                required
              />
              <button className="main-button" type="submit">
                Generate SMS QR
              </button>
            </form>
          )}

          {type === "phone" && (
            <form onSubmit={(e) => props.handleSubmit(e, "phone")} className="form">
              <p>Enter phone number:</p>
              <input
                className="main-plane-area"
                name="phone"
                type="tel"
                placeholder="+911234567890"
                required
              />
              <input
                className="main-plane-area"
                name="dataName"
                type="text"
                placeholder="QR Name"
                required
              />
              <button className="main-button" type="submit">
                Generate Phone QR
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default Main;
