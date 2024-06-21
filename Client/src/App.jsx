import React, { useContext } from "react";
import { useState } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Single from "./components/Single";
import Write from "./components/Write";
import Settings from "./components/Settings";
import Login from "./components/Login";
import Register from "./components/Register";
import { Context } from "./context/Context";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const { user, isFetching, error } = useContext(Context);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              {" "}
              <Home />{" "}
            </>
          }
        />

        <Route
          path="/post/:postId"
          element={
            <>
              {" "}
              <Single />{" "}
            </>
          }
        />

        <Route
          path="/write"
          element={
            user ? (
              <>
                {" "}
                <Write />{" "}
              </>
            ) : (
              <>
                {" "}
                <Register />
              </>
            )
          }
        />

        <Route
          path="/about"
          element={
            <>
              {" "}
              <About />{" "}
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              {" "}
              <Contact />{" "}
            </>
          }
        />

        <Route
          path="/settings"
          element={
            user ? (
              <>
                {" "}
                <Settings />
              </>
            ) : (
              <>
                <Register />{" "}
              </>
            )
          }
        />

        <Route
          path="/login"
          element={
            user ? (
              <>
                {" "}
                <Home />
              </>
            ) : (
              <>
                {" "}
                <Login />{" "}
              </>
            )
          }
        />

        <Route
          path="/register"
          element={
            user ? (
              <>
                {" "}
                <Home />
              </>
            ) : (
              <>
                {" "}
                <Register />{" "}
              </>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
