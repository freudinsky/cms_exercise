import React from "react";

export default function Navigation() {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <img
              src="https://media.istockphoto.com/id/1061969894/de/vektor/filmklappe-film-logo-icon-design-vorlage-vektor-isoliert.jpg?s=170667a&w=0&k=20&c=rxy6sSLRANdZ8D6PfWlWO07qEZR8DW_jV1iu0wcqEwQ="
              width="50"
            />
          </li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        {/* oder */}

        <button id="contact"> Blog | Contact </button>
      </nav>
    </div>
  );
}
