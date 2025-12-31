import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../CSS/Footer.css";

function Footer() {

  const Instagram = process.env.REACT_APP_INSTA_URL;
  const Github = process.env.REACT_APP_GITHUB_URL;
  const Linkedin = process.env.REACT_APP_LINKEDIN_URL;

  const currentYear = new Date().getFullYear();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };


  return (
    <section id="footer">
      <div className="footer , gradient-background">
        <div className="footer-content">

          <section className="footer-info">
            <h3>Quick Nagivation</h3>
            <div className="footer-links">
              <a href={Instagram} target="_blank" rel="noopener noreferrer">
                <img src="/images/insta.png" className="footer-icon" alt="insta" />
              </a>
              <a href="#twitter" >
                <img src="/images/twitter.png" className="footer-icon" alt="twitter" />
              </a>
            </div>
            <div className="footer-links">
              <a href={Github} target="_blank" rel="noopener noreferrer">
                <img src="/images/github.png" className="footer-icon" alt="github" />
              </a>
              <a href={Linkedin} target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin.png" className="footer-icon" alt="linkedin" />
              </a>
            </div>
          </section>

          <section className="footer-about">
            <h3>About Me</h3>
            <p>I am a Computer Science student passionate about building web applications and learning new technologies.</p>
            <p>Copyright ⓒ {currentYear} | QR-CODE GENRETOR</p>
          </section>

          <section className="footer-contact">
            <form ref={form} onSubmit={sendEmail}>
              <h3>Contact Me</h3>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Footer;

