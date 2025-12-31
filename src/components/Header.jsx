import React,{useEffect} from "react";
import "../CSS/Header.css";

function Header() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
  });
  return (
    <header className="gradient-background">
      <h1 className="no-select">QRixel</h1>
      <div className="nav">
        <a href="#home" className="hover-underline">Home</a>
        <a href="#about" className="hover-underline">About</a>
        <a href="#faq" className="hover-underline">FAQ's</a>
        <a href="#footer" className="hover-underline">Contact Me</a>
      </div>
    </header>
  );
}

export default Header;
