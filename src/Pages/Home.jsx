import React, { Component } from "react";
const Home = () => {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            width: "80%",
            margin: "auto",
            marginTop: "50px"
          }}
        >
          <div
            style={{
              textAlign: "center",
              borderRadius: "20px",
              background: "pink"
            }}
          >
            <img
              src="/images/f1.webp"
              alt="img"
              width="250px"
              style={{ borderRadius: "20px" }}
            />
            <p>Order Food Online</p>
          </div>
          <div
            style={{
              textAlign: "center",
              borderRadius: "20px",
              background: "pink"
            }}
          >
            <img
              src="/images/f2.webp"
              alt="img"
              width="250px"
              style={{ borderRadius: "20px" }}
            />
            <p>Order Food Online</p>
          </div>
          <div
            style={{
              textAlign: "center",
              borderRadius: "20px",
              background: "pink"
            }}
          >
            <img
              src="/images/f3.webp"
              alt="img"
              width="250px"
              style={{ borderRadius: "20px" }}
            />
            <p>Order Food Online</p>
          </div>
          <div
            style={{
              textAlign: "center",
              borderRadius: "20px",
              background: "pink"
            }}
          >
            <img
              src="/images/f4.jpeg"
              alt="img"
              width="250px"
              style={{ borderRadius: "20px" }}
            />
            <p>Order Food Online</p>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>Collections</h1>
        <p style={{ fontSize: "18px" }}>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Lucknow, based on trends
        </p>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <div>
            <img src="/images/f5.webp" alt="" />
          </div>
          <div>
            <div style={{ textAlign: "left", marginTop: "150px" }}>
              <h1>Get the Zomato App</h1>
              <p>
                We will send you a link, open it on your phone to download the
                app
              </p>
              <div style={{ margin: "20px", marginLeft: "0px" }}>
                <img
                  src="/images/f8.jpeg"
                  alt="img"
                  width="80%"
                  style={{ borderRadius: "20px" }}
                />
              </div>

              <input
                type="mail"
                style={{
                  height: "41px",
                  width: "280px",
                  fontSize: "18px"
                }}
                placeholder="Email"
              />
              <button
                style={{
                  height: "49px",
                  fontSize: "18px",
                  width: "90px",
                  background: "red",
                  border: "1px solid white",
                  color: "white",
                  borderRadius: "5px"
                }}
              >
                Share
              </button>
              <p>Download app from</p>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div
                  style={{
                    border: "1px solid gray",
                    padding: "10px",
                    background: "rgb(33,58,80)",
                    color: "white",
                    borderRadius: "10PX"
                  }}
                >
                  🍏 App Store
                </div>
                <div
                  style={{
                    border: "1px solid gray",
                    padding: "10px",
                    background: "rgb(33,58,80)",
                    color: "white",
                    borderRadius: "10px"
                  }}
                >
                  ▶︎ Google Play
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          margin: "0px",
          paddingTop: "50px",
          paddingBottom: "50px",
          background: "cornsilk"
        }}
      >
        <h1>Start Your Journey With Zomato</h1>
        <p>We are her to give you a better taste of everything</p>
        <img src="/images/f6.webp" alt="img" width="100%" />
        <h2>THANK YOU FOR SHOPPING WITH US</h2>
        <p>Hope to see you soon</p>
      </div>

      {/* FOOTER OF THE PAGE */}
      <div style={{ width: "90%", margin: "auto" }}>
        <h2 style={{ color: "grey" }}>Cities We Deliver To</h2>
        <div style={{ color: "grey", display: "flex", gap: "2rem" }}>
          <div style={{ width: "18%" }}>
            <p>Delhi NCR</p>
            <p>Hyderabad</p>
            <p>Shimla</p>
            <p>Allahabad</p>
            <p>Agra</p>
          </div>
          <div style={{ width: "18%" }}>
            <p>Bhopal</p>
            <p>Mysore</p>
            <p>Udaipur</p>
            <p>Pushkar</p>
            <p>Thrissur</p>
          </div>
          <div style={{ width: "18%" }}>
            <p>Goa</p>
            <p>Ludhiana</p>
            <p>Leh</p>
            <p>Patna</p>
            <p>Kota</p>
          </div>
          <div style={{ width: "18%" }}>
            <p>Haridwar</p>
            <p>Hyderabad</p>
            <p>Shimla</p>
            <p>Allahabad</p>
            <p>Agra</p>
          </div>
          <div style={{ width: "18%" }}>
            <p>Jodhpur</p>
            <p>Hyderabad</p>
            <p>Shimla</p>
            <p>Allahabad</p>
            <p>Agra</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
