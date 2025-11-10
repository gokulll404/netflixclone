import React from "react";
import "../assets/css/navbar.css";
import { useEffect, useState } from "react";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-left">
        <div className="logo">NETFLIX</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
        </ul>
      </div>
      <div className="nav-right">
        <input className="search" placeholder="Search" />
        <div className="avatar" title="Profile">B</div>
      </div>
    </nav>
  );
}
