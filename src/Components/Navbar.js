import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center bg-green-900 text-white py-2">
      {/* Left Side of Navbar */}

      <Container>
        <div className="flex flex-row">
          <h2 className="text-3xl">Reeco</h2>
          <ul className="flex items-center ml-8 mt-1.5 font-light">
            <li className="mx-2">Store</li>
            <li className="mx-2">Order</li>
            <li className="mx-2">Analytics</li>
          </ul>
        </div>

        {/* Right Side of Navbar */}
        <div className="flex items-center font-light">
          <div id="basket">
            <span>6</span>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
          <div className="pl-16">
            <span className="pr-1">Hello, James</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
