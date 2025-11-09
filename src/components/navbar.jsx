import React from "react";
import "../assets/css/navbar.css";


export default function Navbar(){
  return (
    <nav className="nav">
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
