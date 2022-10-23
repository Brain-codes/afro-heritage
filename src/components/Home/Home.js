import React from "react";
import "./Home.scss";
import arrow from "../Images/arrow.svg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="cont-1">
      <Navbar />
      <div className="sec-1">
        <div className="sec-1-inner">
          <div className="h3-yellow main-changes">Main Barbers</div>
          <div className="event-name">
            IBADAN <span className="span-a">HAIR-</span>
            <span className="span-b">RITAGE</span>
          </div>
          <button className="button-one buy-changes">Buy your ticket</button>
        </div>
      </div>

      <div className="sec-2" id="About-Event">
        <div className="sec-2-inner">
          <h2 className="h2-yellow ">ABOUT THE EVENT</h2>
          <p className="ts mgt-6">
            Afro heritage is an ibadan based New International Version Before
            the mountains were born or you brought forth the whole world, from
            everlasting to everlasting you are God. This event hosts
            accomplished women in tech and highlights their success stories
            within the community, while also sharing tips and takes to growing
            an outstanding career in tech as a woman. This event hosts
            accomplished women in tech and highlights their success stories
            within the community, while also sharing tips and takes to growing
            an outstanding career in tech as a woman.
          </p>

          <div className="ts mgt-6">
            This event hosts accomplished women in tech and highlights their
            success stories within the community, while also sharing tips and
            takes to growing an outstanding career in tech as a woman.This event
            hosts accomplished women in tech and highlights their success
            stories within the community, while also sharing tips and takes to
            growing an outstanding career in tech as a woman.
          </div>

          <h3 className="h3-yellow mgt-6">SIDE ATTRACTIONS</h3>
          <p className="ts-up mgt-1">GAMES</p>
          <p className="ts-up mgt-1">AFRO LIVE BAND</p>
          <p className="ts-up mgt-1">MUSIC</p>
          <p className="ts-up mgt-1">SPOKEN WORD ARTIST</p>
          <p className="ts-up mgt-1">CONTORTIONIST AND MANY MORE</p>

          <h3 className="h3-yellow mgt-6">DATE</h3>
          <p className="ts-up">10 December 2022</p>

          <h3 className="h3-yellow mgt-1">TIME</h3>
          <p className="ts-up">RED CARPET - 12PM | SHOWTIME - 2PM</p>

          <h3 className="h3-yellow mgt-1">LOCATION</h3>
          <p className="ts-up">NO 32 AJALA ESTATE IBADAN NIGERIA.</p>
        </div>
      </div>

      <div className="sec-3" id="Ticket">
        <div className="sec-3-inner">
          <h2 className="h2-green ">TICKET BREAKDOWN</h2>

          <div className="reg-cont mgt-6">
            <div className="reg-top-cont mgb-2">
              <button className="button-one ">REGULAR</button>
              <img src={arrow} alt="" />
              <p className="h3-green">N2,000</p>
            </div>

            <div className="ts">
              Afro heritage is an ibadan based New International Version Before
              the mountains were born or you brought forth the whole world, from
              everlasting to everlasting you are God. This event hosts
              accomplished women in tech and highlights their success stories
              within the community, while also sharing tips and takes to growing
              an
            </div>
          </div>

          <div className="reg-cont mgt-6">
            <div className="reg-top-cont mgb-2">
              <button className="button-one excess-p-1">VIP</button>
              <img src={arrow} alt="" />
              <p className="h3-green">N10,000</p>
            </div>

            <div className="ts">
              Afro heritage is an ibadan based New International Version Before
              the mountains were born or you brought forth the whole world, from
              everlasting to everlasting you are God. This event hosts
              accomplished women in tech and highlights their success stories
              within the community, while also sharing tips and takes to growing
              an
            </div>
          </div>

          <div className="reg-cont mgt-6">
            <div className="reg-top-cont mgb-2">
              <button className="button-one">TABLE FOR FIVE [5]</button>
              <img src={arrow} alt="" />
              <p className="h3-green">N50,000</p>
            </div>

            <div className="ts">
              Afro heritage is an ibadan based New International Version Before
              the mountains were born or you brought forth the whole world, from
              everlasting to everlasting you are God. This event hosts
              accomplished women in tech and highlights their success stories
              within the community, while also sharing tips and takes to growing
              an
            </div>
          </div>
        </div>
      </div>

      <div className="sec-4" id="Sponsorship">
        <h2 className="h2-green " id="Contact">
          SPONSORSHIP / CONTACT
        </h2>

        <div className="reg-cont mgt-6">
          <div className="ts-green">
            Afro heritage is an ibadan based New International Version Before
            the mountains were born or you brought forth the whole world, from
            everlasting to everlasting you are God. This event hosts
            accomplished women in tech and highlights their success stories
            within the community, while also sharing tips and takes to growing
            Afro heritage is an ibadan based New International Version Before
            the mountains were born or you brought forth the whole world, from
            everlasting to everlasting you are God. This event hosts
            accomplished women in tech and highlights their success stories
            within the community, while also sharing tips and takes to growing
            an
          </div>

          <div className="reg-top-cont mgt-6">
            <button className="button-one ">MAIN</button>
            <a className="ts-green mgl-2" href="tel:+2348165654545">
              +2348165654545
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
