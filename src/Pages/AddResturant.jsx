import React, { Component } from "react";
const AddRestaurant = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "cornsilk",
          padding: "100px"
        }}
      >
        <form
          action="add"
          style={{
            border: "1px solid gray",
            padding: "50px",
            borderRadius: "10px",
            background: "white"
          }}
        >
          <h1>Please fill the following form</h1>
          <div style={{ borderRadius: "20px", fontSize: "18x" }}>
            <input
              type="text"
              placeholder="Enter the name of Restaurant"
              style={{
                height: "40px",
                width: "400px",
                background: "black",
                color: "white",
                padding: "10px",
                marginTop: "10px",
                fontSize: "20px",
                borderRadius: "10px"
              }}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Capacity of Restaurant"
              style={{
                height: "40px",
                width: "400px",
                background: "black",
                color: "white",
                padding: "10px",
                marginTop: "10px",
                fontSize: "20px",
                borderRadius: "10px"
              }}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter the Email"
              style={{
                height: "40px",
                width: "400px",
                background: "black",
                color: "white",
                padding: "10px",
                marginTop: "10px",
                fontSize: "20px",
                borderRadius: "10px"
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Create new password"
              style={{
                height: "40px",
                width: "400px",
                background: "black",
                color: "white",
                padding: "10px",
                marginTop: "10px",
                fontSize: "20px",
                borderRadius: "10px"
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password again"
              style={{
                height: "40px",
                width: "400px",
                background: "black",
                color: "white",
                padding: "10px",
                marginTop: "10px",
                fontSize: "20px",
                borderRadius: "10px"
              }}
            />
          </div>
          <div>
            <input
              type="submit"
              value="SUBMIT"
              style={{
                // height: "40px",
                width: "420px",
                background: "teal",
                color: "white",
                padding: "20px",
                marginTop: "10px",
                fontSize: "20px",
                borderRadius: "10px"
              }}
            />
          </div>
        </form>
      </div>

      {/* Footer */}

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
export default AddRestaurant;
