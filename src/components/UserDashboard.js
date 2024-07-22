import React from "react";
import "../styles/UserDashboard.css";
import Navigation from "./Navigation";
import axios from "axios";

export default class UserDashboard extends React.Component {
  state = {
    stays: [],
  };

  render() {
    let stays = [];
    // Mock data for user stays
    axios.get("http://localhost:5000/").then((response) => {
      stays = response.data;
      this.setState({ stays });
    });

    return (
      <div>
        <Navigation />

        <div className="dashboard-container">
          <h1>Mon historique</h1>
          <ul>
            {this.state.stays.map((stay) => (
              <li key={stay.id}>
                <strong>
                  Sejour du {stay.start} a {stay.end}
                </strong>
                <br />
                Raison: {stay.reason}
                <br />
                Docteur: {stay.doctor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
