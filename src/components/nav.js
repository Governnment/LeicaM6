import React from "react";
import Popup from 'reactjs-popup';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <nav>
          <h1 id="logo">Leica</h1>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <Popup
            trigger={
            <li>
              <a className="order" href="#seatures">
                Order
              </a>
            </li>}
              modal
              nested
            >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Order LeicaM6 </div>
                <div className="content">
                  {' '}
                  Wanna buy a new camera. Leica is the best choice for photographers and amature. Call us and get the camera first
                </div>
                <div className="actions">
                  <a href="tel:+44656352263">
                  <button className="popup-button">
                    Get the camera
                  </button>
                  </a>
                </div>
              </div>
            )}
          </Popup>



          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
