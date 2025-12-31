import React, { useRef, useState, useEffect } from "react";
import QRCodeStyling from "qr-code-styling";
import Main from "../components/Main";
import "../CSS/Input.css";

function Input() {

  const qrCodeRef = useRef(null);
  const containerRef = useRef(null);
  const [submit, setSubmit] = useState(false);
  const [qrData, setQrData] = useState({ content: "", name: "" });
  const [pattern, setPattern] = useState("square");
  const [frontColor, setfrontColor] = useState("#000000");
  const [backColor, setbackColor] = useState("#ffffff");
  const [cornerSquare, setCornerSquare] = useState("square");
  const [cornerDot, setCornerDot] = useState("square");
  const [extension, setExtension] = useState("png");

  function handleSubmit(event, type) {
    event.preventDefault();

    let content;
    if (type === "url") {
      content = event.target.dataInput.value;
    } else if (type === "plaintext") {
      content = event.target.plainText.value;
    } else if (type === "email") {
      content = `mailto:${event.target.email.value}?subject=${encodeURIComponent(event.target.subject.value)}&body=${encodeURIComponent(event.target.body.value)}`;
    } else if (type === "sms") {
      content = `SMSTO:${event.target.phone.value}:${event.target.message.value}`;
    } else if (type === "phone") {
      content = `TEL:${event.target.phone.value}`;
    }

    setQrData({ content, name: event.target.dataName?.value ?? "" });
    setSubmit(true);
  }


  useEffect(() => {
    if (submit && qrData.content && containerRef.current) {

      if (!qrCodeRef.current) {
        qrCodeRef.current = new QRCodeStyling({
          width: 220,
          height: 220,
          data: qrData.content,
          dotsOptions: {
            color: frontColor,
            type: pattern
          },
          backgroundOptions: {
            color: backColor
          },
          cornersSquareOptions: {
            type: cornerSquare,
            color: frontColor
          },
          cornersDotOptions: {
            type: cornerDot,
            color: frontColor
          }
        });
        qrCodeRef.current.append(containerRef.current);
      } else {
        qrCodeRef.current.update({
          data: qrData.content,
          dotsOptions: {
            color: frontColor,
            type: pattern
          },
          backgroundOptions: {
            color: backColor
          },
          cornersSquareOptions: {
            type: cornerSquare,
            color: frontColor
          },
          cornersDotOptions: {
            type: cornerDot,
            color: frontColor
          }
        });
      }
    }
  }, [
    submit,
    qrData.content,
    frontColor,
    backColor,
    pattern,
    cornerSquare,
    cornerDot,
  ]);


  function handleBack() {
    setbackColor("#ffffff");
    setfrontColor("#000000");
    setPattern("square");
    setCornerSquare("square");
    setCornerDot("square");
    setExtension("png");
    setSubmit(false);
    setQrData({ content: "", name: "" });

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }
    qrCodeRef.current = null;
  }


  function handleChange(event) {
    setPattern(event.target.value);
  }

  function handleChangeExtension(event) {
    const newEx = event.target.value;
    setExtension(newEx);
  }

  function handleDownload() {
    if (qrCodeRef.current) {
      qrCodeRef.current.download({ name: qrData.name || "qr-code", extension: extension }, 0.9);
    }
  }

  function handleFcolor(event) {
    const newF = event.target.value;
    setfrontColor(newF);
  }

  function handleBcolor(event) {
    const newB = event.target.value;
    setbackColor(newB);
  }

  function handleChangeCorner(event) {
    const newCorner = event.target.value;
    setCornerSquare(newCorner);
  }

  function handleChangeCornerDot(event) {
    const newCornerDot = event.target.value;
    setCornerDot(newCornerDot);
  }

  return !submit ? (
    <Main handleSubmit={handleSubmit} />
  ) : (
    <div className="output-div">
      <div className="output-heading">
        <h2>Here is your QR code</h2>
      </div>
      <div className="content-wrapper">
        <div id="qr-container" ref={containerRef} className="generatedQR"></div>
        <div className="output-content">
          <div className="colorInputDiv">
            <div className="colorDiv">
              <label htmlFor="backgroundColor" className="color-label">Background Color :</label>
              <input
                type="color"
                id="backgroundColor"
                value={backColor}
                onChange={handleBcolor}
                className="input-color"
              />
            </div>

            <div className="colorDiv">
              <label htmlFor="foregroundColor" className="color-label">Pattern Color :</label>
              <input
                type="color"
                id="foregroundColor"
                value={frontColor}
                onChange={handleFcolor}
                className="input-color fore-color"
              />
            </div>
          </div>

          <div className="selects">
            {/* <label htmlFor="dotType" className="color-label">Pattern Type :</label> */}
            <select id="dotType" onChange={handleChange} className="input-select" defaultValue=''>
              <option value="" disabled>Select Pattern</option>
              <option value="dots">Dots</option>
              <option value="rounded">Rounded</option>
              <option value="classy">Classy</option>
              <option value="square">Square</option>
              <option value="classy-rounded">Classy Rounded</option>
              <option value="extra-rounded">Extra Rounded</option>
            </select>

            <select id="cornerSquare" onChange={handleChangeCorner} className="input-select" defaultValue=''>
              <option value="" disabled>Select Corner</option>
              <option value="dots">Dots</option>
              <option value="square">Square</option>
              <option value="extra-rounded">Extra Rounded</option>
            </select>

            <select id="cornerDot" onChange={handleChangeCornerDot} className="input-select" defaultValue=''>
              <option value="" disabled>Select Corner Dot</option>
              <option value="dot">Dot</option>
              <option value="square">Square</option>
            </select>
          </div>
          <div className="extension-radios">
            <label>
              <input
                type="radio"
                name="extension"
                value="png"
                checked={extension === "png"}
                onChange={handleChangeExtension}
              />
              PNG
            </label>

            <label>
              <input
                type="radio"
                name="extension"
                value="svg"
                checked={extension === "svg"}
                onChange={handleChangeExtension}
              />
              SVG
            </label>

            <label>
              <input
                type="radio"
                name="extension"
                value="jpeg"
                checked={extension === "jpeg"}
                onChange={handleChangeExtension}
              />
              JPEG
            </label>

            <label>
              <input
                type="radio"
                name="extension"
                value="webp"
                checked={extension === "webp"}
                onChange={handleChangeExtension}
              />
              WEBP
            </label>
          </div>

          <div className="twoBTN">
            <button onClick={handleDownload} className="afterBTN">Download QR Code!</button>
            <button onClick={handleBack} className="afterBTN">Generate More!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;