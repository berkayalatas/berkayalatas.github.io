import React from "react";
import "./scrollDown.css";

const ScrollDown = () => {
  return (
    <div id="scroll-down" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center'}}>
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron"></div>
      <span className="text">Scroll Down</span>
    </div>
  );
};

export default ScrollDown;
