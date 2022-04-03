import React from "react";
import { Link } from "react-router-dom";
import "./Links.css";

export default function Links() {
  return (
    <div className="links-container">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/help">
        Help
      </Link>
      <Link className="link" to="/testimonials">
        Testimonials
      </Link>
    </div>
  );
}
