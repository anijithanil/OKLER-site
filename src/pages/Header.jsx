import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="row1">
          <div className="row1-left">
            <div className="custom-header-top-nav-background">
              <div className="custom-header2">
                <div className="call-icon">

                  <a><i class="fa  fa-phone-volume" style={{color:"white",fontSize:"18px"}}></i></a>
                  <a href="tel:1234567890">
                    &nbsp;&nbsp;(800) 123-4567 &nbsp;porto@theme.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row1-right">
            <ul>
              <li>Mon - Sat 9:00am - 6:00pm / Sunday - CLOSED</li>
            </ul>
            <ul class="social-icons">
              <li class="social-icons-instagram">
                <a
                  href="http://www.instagram.com/"
                  target="_blank"
                  class="text-4"
                  title="Instagram"
                  data-cursor-effect-hover="fit"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li class="social-icons-twitter">
                <a
                  href="http://www.twitter.com/"
                  target="_blank"
                  class="text-4"
                  title="Twitter"
                  data-cursor-effect-hover="fit"
                >
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="social-icons-facebook">
                <a
                  href="http://www.facebook.com/"
                  target="_blank"
                  class="text-4"
                  title="Facebook"
                  data-cursor-effect-hover="fit"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row2"></div>
      </div>
    </div>
  );
}

export default Header;
