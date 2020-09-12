import React from "react";

import CameraSoon from "../img/camera-soon-v2.png";
import Circle from "../img/circle.png"

class Soon extends React.Component {
  render() {
    return (
      <section className="soon">
        <h2>Coming soon</h2>
        <img src={CameraSoon} alt="Leica M6" />
        <img className="circle" src={Circle} alt="Leica M6" />
      </section>
    );
  }
}

export default Soon;
