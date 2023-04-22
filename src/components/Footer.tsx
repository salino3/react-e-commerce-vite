import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {

  return (
    <footer className="">
      <div className="footer_container text-white">
        <div className="divItem1">
          <Link to={"#"}>
            <img src="/assets/Delivery.jpg" alt="delivery" /> </Link>
          <p>Delivery</p>
        </div>
        <div className="divItem2">
          <Link to={"#"}>
            {" "}
            <img src="/assets/Phone.jpg" alt="phone" />
          </Link>
          <p>+375 (29) 749-18-23</p>
        </div>
        <div className="divItem3">
          <Link to={"#"}>
            <img src="/assets/Return.jpg" alt="return" />
          </Link>
          <p>Returns and exchanges</p>
        </div>
        <div className="divItem4">
          <Link to={"#"}>
            <img src="/assets/Mail.jpg" alt="mail" />
          </Link>
          <p>shop@ropa.com</p>
        </div>
      </div>
    </footer>
  );
}
