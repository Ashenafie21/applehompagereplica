import React from 'react'
import applefilm from '../images/icons/appletvicon.png'
export default function Pro11() {
  return (
    <div>
      <section className="third-hightlight-wrapper">
        <div className="container">
          <div className="apple-film">An Apple Original Film</div>

          <div className="">
            <img src={applefilm} alt="" />
          </div>

          <div className="">In theatres Friday.</div>

          <div className="watch-more-wrapper">
            <a href="#"> Watch the trailer</a>
          </div>
        </div>
      </section>
    </div>
  );
}
