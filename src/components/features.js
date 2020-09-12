import React from "react";

import Card1 from '../img/card1.png';
import Card2 from '../img/card2.png';
import Card3 from '../img/card3.png';
import Wave from '../img/wave.png';

class Features extends React.Component {
  render() {
    return (
      <div className="features-container">
        <section className="features">
          <h2>Features</h2>
          <div className="cards">
            <div className="card">
              <img src={Card1} alt="4k 60fps" />
              <h4>4k 60fps</h4>
              <p>Get those slow motions ma boi</p>
            </div>
            <div className="card">
              <img src={Card2} alt="4k 60fps" />
              <h4>4k 60fps</h4>
              <p>Get those slow motions ma boi</p>
            </div>
            <div className="card">
              <img src={Card3} alt="4k 60fps" />
              <h4>4k 60fps</h4>
              <p>Get those slow motions ma boi</p>
            </div>
          </div>
          <img className="wave" src={Wave} alt="leica" />
        </section>
      </div>
    );
  }
}

export default Features;
