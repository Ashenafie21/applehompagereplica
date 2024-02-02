import React from "react";
import applevisonsm from "../images/icons/applevisonsm.png";
export default function Ipad() {
  return (
    <div>
      <section className="alert-section ">
        <div className="container">
          <div className="alert-title"></div>
          <div className="alert-text"></div>
        </div>
      </section>

      <section className="first-hightlight-wrapper">
        <div className="container">
          <div className=""></div>
          <div className="vision-icon">
            <div className="">
              <img src={applevisonsm} alt="" />
            </div>

            <div className="links-wrapper text-center">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Order</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
