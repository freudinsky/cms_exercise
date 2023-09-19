import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <ul className="footernav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">Imprint</Link>
          </li>
          <li>
            <Link to="#">Privacy note</Link>
          </li>
        </ul>
        <div className="popcorn2">
          <img
            src="https://icons.iconarchive.com/icons/iconarchive/fat-sugar-food/512/Popcorn-icon.png"
            width="60"
          />
        </div>

        <ul className="footer-icons">
          <li>
            <a href="#" className="fa fa-facebook" id="fb-icon"></a>
          </li>

          <li>
            <a href="#" className="fa fa-instagram" id="ig-icon"></a>
          </li>
          <li>
            <a href="#" className="fa fa-youtube-play" id="youtube-icon"></a>
          </li>
        </ul>
      </div>
    </>
  );
}
