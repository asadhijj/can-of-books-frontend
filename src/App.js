import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import Welcome from './Welcome';

class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <br></br>
          <Routes>
            <Route 
              exact path="/"
              element={isAuthenticated ? <BestBooks /> : <Welcome/>}
            >
            </Route>
            <Route 
              exact path="/profile"
              element={ isAuthenticated && <Profile/>}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <br></br>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
