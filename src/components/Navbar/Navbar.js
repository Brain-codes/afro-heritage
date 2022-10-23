import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

import logo from "../Images/logo.svg";

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible" : "hidden";

  const openBurger = () => {
    setBurgerOpen(true);
  };

  //DIFFERENT CLASS NAME FOR BURGER
  const xBurgera = burgerOpen ? "bar-transa" : "bar-1";
  const xBurgerb = burgerOpen ? "bar-transb" : "bar-1";
  const xBurgerc = burgerOpen ? "bar-transc" : "bar-1";

  return (
    <>
      <div>
        <div className={`navbar-cont ${cls}`}>
          {" "}
          <img src={logo} alt="" />
          <div className="nav-links">
            <a className="ts-up" href="#Sponsorship">
              SPONSORSHIP
            </a>

            <a className="ts-up" href="#About-Event">
              ABOUT EVENT
            </a>
            <a className="ts-up" href="#Ticket">
              TICKETS
            </a>
            <a className="ts-up" href="#Contact">
              CONTACT
            </a>
          </div>
        </div>

        <div
          className={burgerOpen ? " burg-cont " : "no-burger-cont"}
          onClick={() => setBurgerOpen(!burgerOpen)}
        >
          <div className={`bar-1 ${xBurgera}`}></div>
          <div className={`bar-1 ${xBurgerb}`}></div>
          <div className={`bar-1 ${xBurgerc}`}></div>
        </div>

        <div className={burgerOpen ? "nav-mobile-cont" : "no-nav-cont"}>
          <div className={burgerOpen ? "nav-cont-m" : "no-nav-cont-m"}>
            <img src={logo} alt="" />
            <div className="nav-links-m">
              <a
                className="ts-up"
                href="#Sponsorship"
                onClick={() => setBurgerOpen(!burgerOpen)}
              >
                SPONSORSHIP
              </a>

              <a
                className="ts-up"
                href="#About-Event"
                onClick={() => setBurgerOpen(!burgerOpen)}
              >
                ABOUT EVENT
              </a>
              <a
                className="ts-up"
                href="#Ticket"
                onClick={() => setBurgerOpen(!burgerOpen)}
              >
                TICKETS
              </a>
              <a
                className="ts-up"
                href="#Contact"
                onClick={() => setBurgerOpen(!burgerOpen)}
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
