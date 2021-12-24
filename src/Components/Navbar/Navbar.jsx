import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
// import axios from "axios";

const NavBar = () => {
  return (
    <>
      <div className={styles.navParent}>
        <div className={styles.navbar}>
          <Link to="/" className={styles.navbarLink}>
            Home
          </Link>
          <Link to="/addrestaurants" className={styles.navbarLink}>
            Add Reastaurants
          </Link>
          <Link to="/login" className={styles.navbarLink}>
            Login Page
          </Link>
          <Link to="/signup" className={styles.navbarLink}>
            Sign Up
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px"
          }}
        >
          <img src="/images/logo.webp" alt="img" height="80px" width="300px" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: "white",
            fontSize: "34px"
          }}
        >
          <p>Discover the best food & drinks in Lucknow</p>
        </div>
      </div>
    </>
  );
};
export default NavBar;
