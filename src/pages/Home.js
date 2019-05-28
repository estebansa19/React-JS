import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";
import "./styles/Home.css";

function Home() {
  return (
    <div className="Background">
      <div className="container text-center container-margin">
        <div className="d-inline-block text-left">
          <img src={logo} alt="" />
          <h1 className="text-white">Badge management system</h1>
          <Link to="/badges" className="btn btn-success">
            Start
          </Link>
        </div>
        <div className="d-inline-block ml-5">
          <img
            src={astronauts}
            alt=""
            className="img-fluid mx-auto d-block Home__image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
