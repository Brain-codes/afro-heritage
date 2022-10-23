import "./Checkout.scss";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

import vip from "../Images/VIP.svg";
import { message } from "antd";
import { Spin } from "antd";
import Footer from "../Footer/Footer";
const Checkout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  //DATE AND TIME
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let newMonth = month[d.getMonth()];
  let day = d.getDate();
  let year = d.getFullYear();
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  let recieptTime = `${formatAMPM(d)} - ${day} ${newMonth} ${year}`;

  //END

  const submitData = async (e) => {
    setLoading(true);
    e.preventDefault();
    axios({
      method: "post",
      url: "https://v1.nocodeapi.com/brain/google_sheets/JOpQdHYNNSPEhwfR?tabId=Sheet1",
      params: {},
      data: [[firstName, lastName, email, phone, token, recieptTime]],
    })
      .then(function (response) {
        if ((response.data.message = "Successfully Inserted")) {
          message.success("Registration Successful...");
        } else {
          message.info(
            "Something went wrong please try again and if persists, please contact us ASAP"
          );
        }
        setLoading(false);
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        message.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="check-cont">
        <div className="left-check">
          <img src={vip} alt="" />
        </div>
        <div className="right-cont">
          <h1 className="head-check mgb-2">Payment Received</h1>
          <p className="p-thin mgb-2">
            Hi, we just received your payment but please note, bank might be
            funny so incase we have some issues, our support team might contact
            you so as to process order successfully.
          </p>

          <p className="p-thin">
            Before you leave, please fill out this form so we can successfully
            generate your <b>ENTRANCE ID</b> so as to have access.
          </p>

          <form className="check-form" onSubmit={(e) => submitData(e)}>
            <input
              className="mgb-2"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              className="mgb-2"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              className="mgb-2"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="mgb-2"
              type="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              className="mgb-2"
              type="text"
              value="ID:"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              required
              readOnly
            />
            {loading == true ? (
              <div className="button-one load-btn">
                {" "}
                <LoadingOutlined
                  style={{
                    fontSize: 24,
                    fontWeight: 400,
                  }}
                  spin
                />
              </div>
            ) : (
              <button className="button-one">SUBMIT</button>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
