import React from "react";
import HomePage from "../../pages/HomePage";

const Main = ({ cssMain, styleMain }) => {
  return (
    <div className={cssMain} style={styleMain}>
      <HomePage/>
    </div>
  );
};

export default Main;