import React from "react";

import "./styles/BadgeNew.css";
import Navbar from "../components/Navbar.js";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src={header} className="img-fluid" alt="Header" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Esteban"
                lastName="Bandido"
                job="No sé"
                twitter="@estebandido"
                avatar="https://www.gravatar.com/avatar/identicon"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
