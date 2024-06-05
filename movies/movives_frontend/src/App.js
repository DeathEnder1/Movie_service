import React, { Component } from 'react';


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Banner from './pages/Banner';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import GoogleDriveVideo from './pages/movie';
import SearchResult from './pages/SearchResult';
import Year from './pages/Year';


import './App.css';
import Main from './pages/Main';
import AuthService from "./services/auth.service";
import BoardAdmin from "./components/board-admin.component";
import BoardModerator from "./components/board-moderator.component";
import BoardUser from "./components/board-user.component";
import Login from "./components/login.component";
import Profile from "./components/profile.component";
import Register from "./components/register.component";
import EventBus from "./common/EventBus";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser,showModeratorBoard, showAdminBoard } = this.state;
    return (  
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li>
                <Link to={"/admin"} >
                  Admin Board
                </Link>
                <Link to={"/movieslist"} >
                  MovieList
                </Link>
                <Link to={"/profile"} >
                  View Profile
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

      <div className="container mt-3">
            <Routes> 
              <Route index element={<><Navbar /><Banner /></>} />
              <Route path="/movieslist" element={<MovieList />} />
              <Route path="/add" element={<AddMovie />} />
              <Route path="/edit/:id" element={<EditMovie />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/user" element={<BoardUser />} />
              <Route path="/movies/:id" element={<><Navbar /><GoogleDriveVideo /></>} />
              <Route path="/mod" element={<BoardModerator />} />
              <Route path="/admin" element={<BoardAdmin />} />
              <Route path="/search/:keyword" element={<><Navbar /><SearchResult /></>} />
              <Route path="/year/:year" element={<><Navbar /><Year /></>} />
            </Routes>
      </div>
      {/* <AuthVerify logOut={this.logOut}/> */}
    </div>
    );
  }
}


export default App;

