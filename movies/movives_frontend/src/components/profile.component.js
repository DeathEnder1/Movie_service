import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import { Link } from 'react-router-dom';
import "../components/profile_components.css"

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return ( 
      <div>
        <div className="profile-header">
          <Link to="/" className="profile-button"><ion-icon name="home-outline"></ion-icon></Link>
          <h2 className="profile-title">Profile</h2>
          <Link to="/login" className="profile-button">Logout</Link>
        </div>

        <div className="profile-container">
          {this.state.userReady ? (
            <div className="user-info">
              {/* <p>
                <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
                {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
              </p> */}
              <p>
                <strong>Id:</strong> {currentUser.id}
              </p>
              <p>
                <strong>Email:</strong> {currentUser.email}
              </p>
              <strong>Authorities:</strong>
              <ul>
                {currentUser.roles &&
                  currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
              </ul>
            </div>
          ) : null}
        </div>


      </div>

    );
  }
}