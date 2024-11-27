import React from "react";
import carosuel from "./carosuel.module.css";
import main from "./images/newGirls1.JPG";

function Carosuel() {
  return (
    <div className={carosuel.child}>
      <img style={{backgroundRepeat:"no-repeat",backgroundSize:"contain", alignSelf: 'center'  }} className={carosuel.main} src={main} alt="main" height={800}/>
    </div>
  );
}

export default Carosuel;
