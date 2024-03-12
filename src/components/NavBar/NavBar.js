import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar-container">
      <ul className="NavList">
        <li className="NavList-Item">
          <Link to="/doctors">Doctors</Link>
        </li>
        <li className="NavList-Item">
          <Link to="/patients">Patients</Link>
        </li>
        <li className="NavList-Item">Reports</li>
        <li className="NavList-Item">Reports</li>
      </ul>
    </div>
  );
}
