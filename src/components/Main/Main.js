import React from "react";
import Ipad from "../IpadPro/Ipad";
import Macbook from "../macbookair/Macbook";
import Pro11 from "../Iphone11pro/11pro";
import Watch from "../TVWatch/Watch";
import Applecard from "../Arcade/Applecard";
import YoutubeVideos from "../AppleYouTube/YoutubeVideos";
function Main() {
  return (
    <>
      <Ipad />
      <Macbook />
      <Pro11 />
      <Watch />
      <Applecard />
      <YoutubeVideos />
    </>
  );
}

export default Main;
