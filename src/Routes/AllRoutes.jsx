import React from "react";
import { Route } from "react-router-dom";
import Home from "../Pages/Home";
import LogIn from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddRestaurants from "../Pages/AddResturant";

const AllRoutes = () => {
  return (
    <>
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/addrestaurants">
          <AddRestaurants />
        </Route>
      </div>
    </>
  );
};
export default AllRoutes;
