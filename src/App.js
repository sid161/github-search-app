import React from "react";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

// react-tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// firebase

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import Home from "./pages/Home";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import firebaseConfig from "./Config/firebaseConfig";

// firebase initialize'

firebase.initializeApp(firebaseConfig);

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}
