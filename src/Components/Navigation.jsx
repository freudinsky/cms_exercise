import React from "react";

export default function Navigation() {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <div className="popcorn1">
              <a href="https://cms-exercise.vercel.app">
                <img
                  src="https://icons.iconarchive.com/icons/iconarchive/fat-sugar-food/512/Popcorn-icon.png"
                  width="100"
                />
              </a>
            </div>
          </li>
          <li>
            <a href="https://cms-exercise.vercel.app">
              <b>Blog</b>
            </a>
          </li>
          <li>
            <a href="#contact">
              <b>Contact</b>
            </a>
          </li>
          <li>
            <a href="#newsletter">
              <b>Newsletter</b>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
