import React from "react";

export default function Footer() {
  return (
    <>
      <div class="footer">
        <p>- footer -</p>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <div class="footer-icons">
          <a href="#" class="fa fa-facebook" id="fb-icon"></a>
          <a href="#" class="fa fa-instagram" id="ig-icon"></a>
          <a href="#" class="fa fa-youtube-play" id="youtube-icon"></a>
        </div>
      </div>
    </>
  );
}
