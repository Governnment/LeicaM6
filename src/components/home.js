import React from "react";

import CameraHome from '../img/camera1.png';

class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <div className="showcase">
          <h2>Leica M6</h2>
          <img src={CameraHome} alt="Leica M6" />
          <div className="info">
            <h3>Small but powerful</h3>
            <p>
              The new Leica M6 offers 4k at 60fps, Raw Video & Full Frame Sensor
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
