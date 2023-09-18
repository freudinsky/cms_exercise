import React from "react";

export default function Navigation() {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <div className="popcorn1">
              <img
                href="https://cms-exercise.vercel.app"
                src="https://icons.iconarchive.com/icons/iconarchive/fat-sugar-food/512/Popcorn-icon.png"
                width="100"
              />
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

        {/* oder */}

        {/* <div className="Homepage">
          <img
            src="https://media.istockphoto.com/id/1061969894/de/vektor/filmklappe-film-logo-icon-design-vorlage-vektor-isoliert.jpg?s=170667a&w=0&k=20&c=rxy6sSLRANdZ8D6PfWlWO07qEZR8DW_jV1iu0wcqEwQ="
            width="100"
          />
        </div>

        <button id="contact"> Blog | Contact </button> */}
      </nav>
    </div>
  );
}
