import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <>
      <div>
        <div className={styles.navbar}>
          <Link to="/" className={styles.navbarLink}>
            Home
          </Link>
          <Link to="/login" className={styles.navbarLink}>
            Login Page
          </Link>
          <Link to="/signup" className={styles.navbarLink}>
            Sign Up
          </Link>
          <Link to="/addrestaurants" className={styles.navbarLink}>
            Add Reastaurants
          </Link>
        </div>
      </div>
    </>
  );
};
export default NavBar;
